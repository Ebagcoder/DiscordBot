throw err;
Error: connect ECONNREFUSED 127.0.0.1:3306
at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1141:16)
--------------------
at Protocol._enqueue (/home/container/node_modules/mysql/lib/protocol/Protocol.js:144:48)
at Protocol.handshake (/home/container/node_modules/mysql/lib/protocol/Protocol.js:51:23)
at Connection.connect (/home/container/node_modules/mysql/lib/Connection.js:116:18)
at Object.<anonymous> (/home/container/bot.js:20:5)
at Module._compile (internal/modules/cjs/loader.js:1156:30)
at Object.Module._extensions..js (internal/modules/cjs/loader.js:1176:10)
at Module.load (internal/modules/cjs/loader.js:1000:32)
at Function.Module._load (internal/modules/cjs/loader.js:899:14)
at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
at internal/main/run_main_module.js:18:47 {
errno: 'ECONNREFUSED',
code: 'ECONNREFUSED',
syscall: 'connect',
address: '127.0.0.1',
port: 3306,
fatal: true
