
// 手动实现array reduce方法
Array.prototype.myReduce = function (fn, ...args) {
    if (typeof fn !== 'function') {
        throw new Error('fn not a function')
    }
    let acc = this[0]
    let startIndex = 1
    if (args.length > 0) { // args存在且长度大于0，说明initialValue存在，就取第一个参数
        acc = args[0]
        startIndex = 0
    }
    for (let i = startIndex; i < this.length; i++) {
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

let arr = [1, 2, 3]
let res = arr.reduce((pre, cur) => {
    return pre + cur
}, undefined)
console.log(res)
console.log('/**-------------------- 分割 --------------------*/')
let myRes = arr.myReduce((pre, cur) => {
    return pre + cur
}, undefined)
console.log(myRes)
// console.log([].myReduce({}))
// TODO 实现map filter find 等方法

