Array.prototype.myReduce = function (fn, ...args) {
    let acc = this[0]
    let startIndex = 1 // 数组的第一项
    if (args.length) { // initValue存在
        acc = args[0]
        startIndex = 0
    }
    for(let i = startIndex; i < this.length; i++) {
        acc = fn(acc, this[i], i, this)
    }
    return acc
}