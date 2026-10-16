#!/usr/bin/env node
// 入画 · Mac 常驻程序。放在 ~/ruhua-mac/loop.mjs，由 launchd 运行。
// 通道是 ntfy.sh 上的两个频道，不需要任何账号：<TOPIC>-req 收 imax 的测试请求，<TOPIC>-res 传回结果。
// 只打开 https://cyzcyz669.github.io/ruhua/ 下的网址；只写 ~/ruhua-mac/；只连 ntfy.sh 和 cyzcyz669.github.io（盲审时另外调用本机的 codex）。
// 不会下载或执行任何新代码。
//   node loop.mjs              常驻：每 30 秒看一次有没有新请求
//   node loop.mjs --selftest   自检：测一遍浏览器和显卡，试一次 codex，结果传回 imax
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync, rmSync } from 'node:fs';
import { join, dirname, delimiter } from 'node:path';
import { fileURLToPath } from 'node:url';

const VERSION = 'ruhua-mac 2026-10-16';
const HERE = dirname(fileURLToPath(import.meta.url));
const RUNS = join(HERE, 'runs');
const ALLOW = 'https://cyzcyz669.github.io/ruhua/';
const NTFY = 'https://ntfy.sh/';

// ~/ruhua-mac/env：TOPIC=…、NODE=…、CODEX=…（可空）、https_proxy=…（需要代理才写）
const env = {};
try {
  for (const l of readFileSync(join(HERE, 'env'), 'utf8').split(/\r?\n/)) {
    const m = l.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (m) env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
} catch {}
for (const k of ['https_proxy', 'http_proxy', 'all_proxy', 'no_proxy', 'HTTPS_PROXY', 'HTTP_PROXY', 'ALL_PROXY', 'NO_PROXY']) if (env[k]) process.env[k] = env[k];
const NODE = env.NODE || process.execPath;
const CODEX = env.CODEX || '';
const TOPIC = env.TOPIC || '';
process.env.PATH = [dirname(NODE), CODEX && dirname(CODEX), '/opt/homebrew/bin', '/usr/local/bin', process.env.PATH || '/usr/bin:/bin:/usr/sbin:/sbin'].filter(Boolean).join(delimiter);
if (!/^[A-Za-z0-9_-]{16,64}$/.test(TOPIC)) { console.error('~/ruhua-mac/env 里没有正确的 TOPIC=…'); process.exit(1); }
mkdirSync(RUNS, { recursive: true });

const log = s => console.log(new Date().toISOString().replace('T', ' ').slice(0, 19) + ' ' + s);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const sh = (cmd, args) => { const r = spawnSync(cmd, args, { encoding: 'utf8', timeout: 30e3 }); return (r.stdout || '').trim(); };
const curl = (args, input) => spawnSync('curl', ['-sS', '-m', '300', ...args], { encoding: 'utf8', input, maxBuffer: 64 << 20 });
const resUrl = q => `${NTFY}${TOPIC}-res?${q}`;
function say(title, body) {
  const r = curl(['--data-binary', '@-', resUrl('title=' + encodeURIComponent(title))], String(body).slice(0, 3000) || '-');
  if (r.status) log('发送失败：' + (r.stderr || '').trim());
}
function sendFile(file, name, title) {
  const r = curl(['-T', file, resUrl(`title=${encodeURIComponent(title)}&filename=${encodeURIComponent(name)}`)]);
  if (r.status) log('上传失败：' + (r.stderr || '').trim());
}
const read = f => (existsSync(f) ? readFileSync(f, 'utf8') : '');

function parseReq(text) {
  const r = {};
  for (const l of text.split(/\r?\n/)) {
    const m = l.replace(/\s+#.*$/, '').match(/^\s*([a-z]+)\s*=\s*(.*?)\s*$/);
    if (m) r[m[1]] = m[2];
  }
  return r;
}

function runTest(dir, reqText, self) {
  mkdirSync(dir, { recursive: true });
  if (!self) writeFileSync(join(dir, 'request.txt'), reqText);
  const args = self ? [join(HERE, 'test.mjs'), '--selftest', dir] : [join(HERE, 'test.mjs'), join(dir, 'request.txt'), dir];
  const r = spawnSync(NODE, args, { encoding: 'utf8', timeout: 25 * 60e3, maxBuffer: 64 << 20 });
  writeFileSync(join(dir, 'run.log'), (r.stdout || '') + (r.stderr || '') + (r.error ? '\n' + r.error.message : ''));
  if (!existsSync(join(dir, 'result.json'))) writeFileSync(join(dir, 'result.json'), JSON.stringify({ error: 'test.mjs 没有写出结果，见 run.log' }));
}

// 独立盲审：只给 codex 参考图、本轮截图和评分标准（rubric.txt），不给代码和说明
function codex(dir, prompt, images) {
  if (!CODEX) return '没有配置 CODEX，跳过盲审';
  const args = ['exec', '--skip-git-repo-check', '-s', 'read-only', '-o', join(dir, 'review.txt'), prompt];
  if (images.length) args.push('-i', images.join(','));
  const r = spawnSync(CODEX, args, { encoding: 'utf8', cwd: dir, timeout: 15 * 60e3, maxBuffer: 64 << 20 });
  writeFileSync(join(dir, 'review.log'), (r.stdout || '').slice(-20000) + '\n' + (r.stderr || '').slice(-20000) + (r.error ? '\n' + r.error.message : ''));
  return existsSync(join(dir, 'review.txt')) ? '盲审完成' : '盲审失败，见 review.log';
}
function review(dir, req) {
  const refs = [];
  (req.refs || '').split(',').map(s => s.trim()).filter(u => u.startsWith(ALLOW)).slice(0, 8).forEach((u, i) => {
    const f = join(dir, `ref${i + 1}.jpg`);
    if (!curl(['-fL', '-o', f, u]).status) refs.push(f);
  });
  const shots = readdirSync(dir).filter(f => /^chrome_cam\d+\.jpg$/.test(f))
    .sort((a, b) => parseInt(a.slice(10)) - parseInt(b.slice(10))).map(f => join(dir, f));
  let prompt = read(join(HERE, 'rubric.txt')) || '请给这些截图打分。';
  if (req.scene) prompt += `\n\n本轮场景：${req.scene}`;
  prompt += `\n\n附图顺序：前 ${refs.length} 张是参考图（ref1…），后 ${shots.length} 张是本轮截图（机位 ${shots.map(f => f.match(/cam(\d+)/)[1]).join('、')}）。`;
  return codex(dir, prompt, [...refs, ...shots]);
}

function upload(id, dir) {
  const files = readdirSync(dir).filter(f => !/^ref\d+\.jpg$/.test(f)).map(f => join(dir, f));
  const zip = join(RUNS, `${id}.zip`);
  rmSync(zip, { force: true });
  spawnSync('zip', ['-qj', zip, ...files]);
  const head = read(join(dir, 'summary.md')).split('\n').slice(0, 12).join('\n');
  say(id, head || read(join(dir, 'result.json')).slice(0, 1500));
  if (existsSync(zip) && statSync(zip).size < 14e6) sendFile(zip, `${id}.zip`, id);
  else for (const f of files) sendFile(f, f.split('/').pop(), id);
}

function handle(text) {
  const t = text.trim();
  if (t === 'ping') { say('pong', `${VERSION}\n${new Date().toISOString()}\n${sh('pmset', ['-g', 'batt'])}`); return; }
  const req = parseReq(t);
  const id = req.id || '';
  if (!/^[A-Za-z0-9_-]{1,40}$/.test(id)) { say('error', '请求里没有正确的 id'); return; }
  if (!(req.url || '').startsWith(ALLOW)) { say(id, '网址不在允许范围，没有运行'); return; }
  const dir = join(RUNS, id);
  if (existsSync(join(dir, 'result.json')) && req.again !== '1') { log(`重发 ${id}`); upload(id, dir); return; }
  rmSync(dir, { recursive: true, force: true });
  log(`测试 ${id} 开始`);
  say(`${id} start`, '开始测试');
  runTest(dir, t, false);
  if (req.review === '1') log(`盲审 ${id}：${review(dir, req)}`);
  upload(id, dir);
  log(`测试 ${id} 完成`);
}

function selftest() {
  const dir = join(RUNS, 'selftest');
  rmSync(dir, { recursive: true, force: true });
  runTest(dir, '', true);
  const img = join(dir, 'chrome_selftest.jpg');
  const c = CODEX ? codex(dir, '这是一次连通测试。用一句话说出附图里的主要颜色和文字。', existsSync(img) ? [img] : []) : '没有配置 CODEX';
  upload('selftest', dir);
  console.log(read(join(dir, 'summary.md')));
  console.log(`codex：${c}\n${read(join(dir, 'review.txt'))}`);
  console.log(`结果已传回 imax（频道 ${TOPIC}-res）。`);
}

function lock() {
  const pidFile = join(HERE, 'loop.pid');
  try {
    const p = parseInt(readFileSync(pidFile, 'utf8'), 10);
    if (p && p !== process.pid && sh('ps', ['-p', String(p), '-o', 'command=']).includes('loop.mjs')) { log(`已经在运行（pid ${p}）`); return false; }
  } catch {}
  writeFileSync(pidFile, String(process.pid));
  process.on('exit', () => rmSync(pidFile, { force: true }));
  for (const s of ['SIGINT', 'SIGTERM']) process.on(s, () => process.exit(0));
  return true;
}

async function main() {
  if (process.argv.includes('--selftest')) return selftest();
  if (!lock()) return sleep(300e3);
  const stateFile = join(HERE, 'since.txt');
  let since = read(stateFile).trim() || String(Math.floor(Date.now() / 1000) - 3600);
  log(`启动 ${VERSION}，node ${process.version}，codex ${CODEX ? '有' : '无'}`);
  say('online', `${VERSION} 上线\n${new Date().toISOString()}`);
  for (;;) {
    const r = curl([`${NTFY}${TOPIC}-req/json?poll=1&since=${encodeURIComponent(since)}`]);
    if (r.status) log('拉取失败：' + (r.stderr || '').trim());
    else for (const line of r.stdout.split('\n')) {
      let m;
      try { m = JSON.parse(line); } catch { continue; }
      if (m.event !== 'message') continue;
      since = m.id;
      writeFileSync(stateFile, since);
      try { handle(m.message || ''); } catch (e) { log('出错：' + e.message); say('error', String(e.stack || e)); }
    }
    await sleep(30e3);
  }
}
main();
