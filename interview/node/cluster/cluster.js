const cluster = require('cluster');
const cpus = require('os').cpus();

// const accessLogger = require("../logger").accessLogger();

console.info('master ' + process.pid + ' is starting.');

cluster.setupMaster({
    /* 应用进程启动文件 */
    exec: 'bin/www'
});

/* 启动应用进程个数和服务器CPU核数一样 */
for (let i = 0; i < cpus.length; i++) {
    cluster.fork();
}

cluster.on('online', function (worker) {
    /* 进程启动成功 */
    console.info('worker ' + worker.process.pid + ' is online.');
});
cluster.on('exit', function (worker, code, signal) {
    /* 应用进程退出时，记录日志并重启 */
    console.info('worker ' + worker.process.pid + ' died.');
    cluster.fork();
});