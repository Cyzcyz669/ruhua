入画 · Mac 真机测试 —— 给 Codex 的配置说明
=============================================

你要在用户的 Mac 上装一个常驻的小程序。云端的 imax（这个网页游戏的开发者）发测试请求，
这台 Mac 就用本机的 Chrome 和 WebKit（Safari 内核）打开 https://cyzcyz669.github.io/ruhua/ 下的页面，
截图、记下显卡和帧率，把结果传回去；需要时再用本机的 codex exec 做一次独立盲审打分。

通道：ntfy.sh 上的两个频道（用户发给你的频道名记作 TOPIC）：TOPIC-req 收请求，TOPIC-res 传结果。
不需要任何账号、密钥，也不需要访问 GitHub 仓库。

请用完全访问模式，或者在请求时逐条批准：要联网，要写 ~/ruhua-mac 和 ~/Library/LaunchAgents，要打开浏览器。
不要放进「文稿」「桌面」「下载」（macOS 会弹权限框，后台程序会卡住）。

1. 检查环境
   sw_vers; node -v（要 18 以上；没有就装 https://nodejs.org 的 LTS，或 brew install node）
   ls "/Applications/Google Chrome.app"
   curl -sI https://ntfy.sh | head -1; curl -sI https://cyzcyz669.github.io/ruhua/ | head -1
   这两个网址要能通。直连不通就看 scutil --proxy，把本机代理写进第 4 步的 env（例如 https_proxy=http://127.0.0.1:7890）。

2. 下载，并审阅
   mkdir -p ~/ruhua-mac && cd ~/ruhua-mac
   for f in test.mjs loop.mjs rubric.txt com.ruhua.loop.plist; do curl -fsSO https://cyzcyz669.github.io/ruhua/mac/$f; done
   请读一遍 test.mjs 和 loop.mjs（都不长），确认：只打开 https://cyzcyz669.github.io/ruhua/ 下的网址；
   网络只连 ntfy.sh 的这两个频道和 cyzcyz669.github.io；只写 ~/ruhua-mac；不下载、不执行新代码。有疑问写进报告。

3. 装依赖
   cd ~/ruhua-mac && npm init -y >/dev/null && npm i playwright && npx playwright install webkit

4. 写 ~/ruhua-mac/env（每行一个 键=值）
   TOPIC=用户给你的频道名
   NODE=（command -v node 的结果，写绝对路径）
   CODEX=（command -v codex 的结果，写绝对路径；本机没有 codex 命令就留空）
   https_proxy=…（只有第 1 步需要代理时才写；http_proxy 同理）

5. 自检（Chrome 和 WebKit 窗口会各弹出几秒）
   node ~/ruhua-mac/loop.mjs --selftest
   它会测一遍两个浏览器的 WebGL2 和显卡；CODEX 有值时，再用 codex exec 看一张图试一次；结果自动传回 imax。
   codex 那一步失败就看 ~/ruhua-mac/runs/selftest/review.log：通常是代理没写进 env，或 codex 没登录。
   实在不通就把 CODEX 留空，盲审以后再说。

6. 设为常驻（登录后自动运行，你退出后也继续）
   cd ~/ruhua-mac
   sed -e "s#HOME_DIR#$HOME#g" -e "s#NODE_BIN#$(command -v node)#g" com.ruhua.loop.plist > ~/Library/LaunchAgents/com.ruhua.loop.plist
   launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.ruhua.loop.plist
   一分钟后 tail ~/ruhua-mac/loop.log，应该看到「启动」。

7. 给用户一段简短报告：每一步成没成；~/ruhua-mac/runs/selftest/summary.md 里 Chrome、WebKit 各自的显卡名，
   以及「Chrome 不弹窗口时的显卡」；codex 试运行成没成；没做成的事和原因。

之后就不用管了。测试时屏幕上会弹出 Chrome / WebKit 窗口几分钟，属正常，别关。
Mac 睡眠时暂停，醒来自动继续。停止：launchctl bootout gui/$(id -u)/com.ruhua.loop
程序不会自己更新；以后要更新，用户会让你重新下载、审阅这几个文件，然后停止再启动一次。
