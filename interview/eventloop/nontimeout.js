// https://github.com/nodejs/node/blob/v8.9.4/lib/timers.js#L456
// https://zhuanlan.zhihu.com/p/33087629
setTimeout(() => {
	console.log(2)
}, 2)

setTimeout(() => {
	console.log(1)
}, 1)

setTimeout(() => {
	console.log(0)
}, 0)