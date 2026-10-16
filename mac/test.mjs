#!/usr/bin/env node
// 入画 · Mac 真机测试。放在 ~/ruhua-mac/test.mjs，由 loop.mjs 调用，也可以单独运行。
//   node test.mjs <request.txt> <输出目录>
//   node test.mjs --selftest <输出目录>
// 只打开 https://cyzcyz669.github.io/ruhua/ 下的网址，只写输出目录，不读也不改本机其他文件。
import { chromium, webkit } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import os from 'node:os';

const ALLOW = 'https://cyzcyz669.github.io/ruhua/';
const [a0, a1] = process.argv.slice(2);
const self = a0 === '--selftest';
const out = a1;
if (!a0 || !out) { console.error('用法：node test.mjs <request.txt> <输出目录> | --selftest <输出目录>'); process.exit(1); }
mkdirSync(out, { recursive: true });

// request.txt：每行 键=值，例如 id=r01 / url=https://cyzcyz669.github.io/ruhua/v2/ / cams=1,2,3,4,5,6
const req = { id: 'selftest', browsers: 'chrome,webkit', cams: '', wait: '3', bench: '0', w: '1440', h: '900', dpr: '2', headless: '0' };
if (!self) for (const line of readFileSync(a0, 'utf8').split(/\r?\n/)) {
  const m = line.replace(/\s+#.*$/, '').match(/^\s*([a-z]+)\s*=\s*(.*?)\s*$/);
  if (m) req[m[1]] = m[2];
}
const num = (v, d, lo, hi) => { const n = Number(v); return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : d; };
const W = num(req.w, 1440, 320, 3840), H = num(req.h, 900, 320, 2400), DPR = num(req.dpr, 2, 1, 3), WAIT = num(req.wait, 3, 0, 60);
const cams = (req.cams || '').split(',').map(s => parseInt(s, 10)).filter(n => n >= 1 && n <= 12);
const browsers = (req.browsers || '').split(',').map(s => s.trim()).filter(s => s === 'chrome' || s === 'webkit');

const result = { id: req.id, url: req.url || null, started: new Date().toISOString(), request: req, mac: macInfo(), browsers: {} };
const save = () => { result.updated = new Date().toISOString(); writeFileSync(join(out, 'result.json'), JSON.stringify(result, null, 2)); };
if (!self && !(req.url || '').startsWith(ALLOW)) { result.error = '网址不在允许范围：' + req.url; save(); process.exit(1); }
setTimeout(() => { result.error = '超过 20 分钟，强制结束'; save(); process.exit(2); }, 20 * 60e3).unref();

function sh(cmd, args) { try { return execFileSync(cmd, args, { encoding: 'utf8', timeout: 30e3, stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return null; } }
function macInfo() {
  let gpus = null;
  try {
    gpus = JSON.parse(sh('system_profiler', ['SPDisplaysDataType', '-json'])).SPDisplaysDataType.map(g => ({
      name: g.sppci_model, vram: g.spdisplays_vram || g.spdisplays_vram_shared || null,
      metal: g.spdisplays_mtlgpufamilysupport || g.spdisplays_metal || null,
      displays: (g.spdisplays_ndrvs || []).map(d => ({ name: d._name, res: d._spdisplays_resolution || d.spdisplays_resolution || null, pixels: d._spdisplays_pixels || null })),
    }));
  } catch {}
  return {
    os: sh('sw_vers', ['-productVersion']), model: sh('sysctl', ['-n', 'hw.model']), cpu: sh('sysctl', ['-n', 'machdep.cpu.brand_string']),
    memGB: Math.round(os.totalmem() / 2 ** 30), node: process.version, gpus,
    battery: sh('pmset', ['-g', 'batt']), thermal: sh('pmset', ['-g', 'therm']),
  };
}

const withQ = (u, q) => u + (u.includes('?') ? '&' : '?') + q;
const clip = (s, n = 500) => String(s).slice(0, n);

// 默认开窗口跑（最接近真实使用）；request 里写 headless=1 就不弹窗口
async function launch(name, headless = req.headless === '1') {
  if (name === 'webkit') return { browser: await webkit.launch({ headless }), engine: 'playwright-webkit（Safari 内核）' };
  if (process.env.CHROME_PATH) return { browser: await chromium.launch({ headless, executablePath: process.env.CHROME_PATH }), engine: 'chrome(path)' };
  try { return { browser: await chromium.launch({ headless, channel: 'chrome' }), engine: '本机 Google Chrome' }; }
  catch (e) { return { browser: await chromium.launch({ headless }), engine: 'playwright-chromium（没找到本机 Chrome）', note: clip(e.message, 300) }; }
}

async function probe(page) {
  return page.evaluate(() => {
    const r = { ua: navigator.userAgent, dpr: devicePixelRatio, screen: [screen.width, screen.height], cores: navigator.hardwareConcurrency, mem: navigator.deviceMemory || null };
    const gl = document.createElement('canvas').getContext('webgl2');
    r.webgl1 = !!document.createElement('canvas').getContext('webgl');
    r.webgl2 = !!gl;
    if (gl) {
      const d = gl.getExtension('WEBGL_debug_renderer_info');
      r.vendor = gl.getParameter(d ? d.UNMASKED_VENDOR_WEBGL : gl.VENDOR);
      r.renderer = gl.getParameter(d ? d.UNMASKED_RENDERER_WEBGL : gl.RENDERER);
      r.maxTexture = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      r.maxSamples = gl.getParameter(gl.MAX_SAMPLES);
      r.maxDrawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS);
      r.maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
      r.extensions = gl.getSupportedExtensions();
    }
    return r;
  });
}

async function chromeGpu(ctx) {
  const page = await ctx.newPage();
  try {
    await page.goto('chrome://gpu', { timeout: 20e3 });
    await page.waitForTimeout(1500);
    return await page.evaluate(() => {
      const outText = [];
      const walk = n => { if (n.shadowRoot) walk(n.shadowRoot); for (const c of n.childNodes) { if (c.nodeType === 3) { const t = c.textContent.trim(); if (t) outText.push(t); } else if ((c.nodeType === 1 && !/^(STYLE|SCRIPT|TEMPLATE)$/.test(c.tagName)) || c.nodeType === 11) walk(c); } };
      walk(document.body);
      return outText.join('\n').slice(0, 200000);
    });
  } catch (e) { return '读取 chrome://gpu 失败：' + e.message; }
  finally { await page.close().catch(() => {}); }
}

async function shot(page, file) {
  await page.screenshot({ path: join(out, file), type: 'jpeg', quality: 88, scale: 'css', timeout: 60e3 });
  return file;
}

async function runBrowser(name) {
  const b = (result.browsers[name] = { console: [], errors: [], crashes: 0 });
  const t0 = Date.now();
  let browser;
  try {
    const l = await launch(name);
    browser = l.browser; b.engine = l.engine; if (l.note) b.note = l.note; b.version = browser.version();
    const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: DPR });
    const page = await ctx.newPage();
    page.on('console', m => { if ((m.type() === 'error' || m.type() === 'warning') && b.console.length < 80 && !/stall due to ReadPixels/.test(m.text())) b.console.push(m.type() + ': ' + clip(m.text())); });
    page.on('pageerror', e => { if (b.errors.length < 40) b.errors.push(clip(e.message)); });
    page.on('crash', () => { b.crashes++; });
    await page.goto('about:blank');
    b.webgl = await probe(page);
    if (name === 'chrome') { writeFileSync(join(out, 'chrome_gpu.txt'), await chromeGpu(ctx)); b.gpuReport = 'chrome_gpu.txt'; }
    save();

    if (self) {
      await page.setContent(`<body style="margin:0;background:#EFE9DC;font:28px sans-serif"><canvas id=c width=600 height=300></canvas><p style="margin:16px">入画 · ${name} 自检 ${new Date().toLocaleString()}</p>
        <script>const gl=document.getElementById('c').getContext('webgl2');if(gl){gl.clearColor(0.965,0.769,0.812,1);gl.clear(gl.COLOR_BUFFER_BIT);}else document.body.append(' 没有 WebGL2');</script></body>`);
      await page.waitForTimeout(500);
      b.selftestShot = await shot(page, `${name}_selftest.jpg`);
    }

    if (!self && req.bench === '1') {
      const s = Date.now();
      try {
        await page.goto(withQ(req.url, 'diag&bench'), { waitUntil: 'load', timeout: 120e3 });
        await page.waitForFunction(() => window.__bench && window.__bench.done, null, { timeout: 240e3, polling: 1000 });
      } catch (e) { b.benchError = clip(e.message); }
      b.bench = await page.evaluate(() => JSON.parse(JSON.stringify(window.__bench || null))).catch(() => null);
      b.benchShot = await shot(page, `${name}_bench.jpg`).catch(() => null);
      b.benchSec = Math.round((Date.now() - s) / 1000);
      save();
    }

    b.cams = [];
    for (const n of self ? [] : cams) {
      const c = { cam: n };
      const s = Date.now();
      try {
        await page.goto(withQ(req.url, `diag&cam=${n}`), { waitUntil: 'load', timeout: 120e3 });
        await page.waitForFunction(() => window.__diag && window.__diag.ready, null, { timeout: 120e3, polling: 500 });
        c.ready = true;
        await page.waitForTimeout(WAIT * 1000);
      } catch (e) { c.ready = false; c.error = clip(e.message); }
      c.diag = await page.evaluate(() => JSON.parse(JSON.stringify(window.__diag || null))).catch(() => null);
      c.shot = await shot(page, `${name}_cam${n}.jpg`).catch(e => { c.shotError = clip(e.message); return null; });
      c.sec = Math.round((Date.now() - s) / 1000);
      b.cams.push(c);
      save();
    }
    await ctx.close();
  } catch (e) {
    b.fatal = clip(e.stack || e.message, 2000);
  } finally {
    if (browser) await browser.close().catch(() => {});
    b.sec = Math.round((Date.now() - t0) / 1000);
    save();
  }
}

function summary() {
  const L = [`# ${result.id}　${result.url || '自检'}`, '', `Mac：${result.mac.model || '?'}，${result.mac.cpu || '?'}，${(result.mac.gpus || []).map(g => g.name).join(' / ') || '?'}，macOS ${result.mac.os || '?'}，${result.mac.battery ? (result.mac.battery.includes('AC Power') ? '接电源' : '用电池') : '电源未知'}`, ''];
  for (const [name, b] of Object.entries(result.browsers)) {
    L.push(`## ${name}：${b.engine || ''} ${b.version || ''}`);
    L.push(`- WebGL2：${b.webgl ? (b.webgl.webgl2 ? '有' : '没有') + '，' + (b.webgl.renderer || '') : '未测到'}`);
    if (b.bench) L.push('- bench：' + JSON.stringify(b.bench).slice(0, 600));
    if (b.benchError) L.push('- bench 出错：' + b.benchError);
    for (const c of b.cams || []) {
      const d = c.diag || {};
      L.push(`- 机位 ${c.cam}：${c.ready ? '就绪' : '未就绪'}${d.fps ? '，' + d.fps + ' fps' : ''}${d.ms ? '，' + d.ms + ' ms' : ''}${d.res ? '，' + d.res : ''}${c.error ? '，' + c.error.split('\n')[0] : ''}`);
    }
    if (b.crashes) L.push(`- 页面崩溃 ${b.crashes} 次`);
    if (b.errors.length) L.push('- 页面错误：' + b.errors.slice(0, 5).join(' | '));
    if (b.console.length) L.push('- 控制台：' + b.console.slice(0, 5).join(' | '));
    if (b.fatal) L.push('- 致命错误：' + b.fatal.split('\n')[0]);
    L.push('');
  }
  if (result.chromeHeadless) L.push(`Chrome 不弹窗口时的显卡：${result.chromeHeadless.renderer || result.chromeHeadless.error || '?'}`, '');
  if (result.error) L.push('错误：' + result.error, '');
  writeFileSync(join(out, 'summary.md'), L.join('\n'));
}

for (const name of browsers) await runBrowser(name);
if (self && browsers.includes('chrome')) {
  // 看看不弹窗口（headless）时 Chrome 还用不用真显卡，用的话以后测试就不打扰屏幕
  try { const l = await launch('chrome', true); const p = await l.browser.newPage(); await p.goto('about:blank'); result.chromeHeadless = await probe(p); delete result.chromeHeadless.extensions; await l.browser.close(); }
  catch (e) { result.chromeHeadless = { error: clip(e.message) }; }
}
result.finished = new Date().toISOString();
save();
summary();
console.log('完成：' + join(out, 'result.json'));
process.exit(0);
