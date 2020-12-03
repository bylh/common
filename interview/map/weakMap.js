// 正常情况下global中是没有暴露gc的，需要运行主动传递参数 （node --expose-gc  weakMap.js）

// global.gc()
console.log(global.gc)
console.log(process.memoryUsage())