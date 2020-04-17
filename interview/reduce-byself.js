// 手动实现array reduce方法
Array.prototype.myReduce = function(fn, initialValue) {
    let acc = initialValue || this[0]
    const startIndex = initialValue ? 0 : 1
    for (let i = startIndex; i < this.length; i++) {
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

// TODO 实现map filter find 等方法
