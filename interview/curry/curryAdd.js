// 函数sum(1)(2)(3)(4)...(n)实现无限累加
function add(...args) {
    return args.reduce((acc, cur) => acc + cur)
}
function curry(fn) {
    let argArr = [] // 关键点：使用闭包保存参数（累积参数）
    return function temp(...args) {
        if (args.length > 0) {
            argArr = [
                ...argArr,
                ...args
            ]
            return temp // 关键点：未终止时返回函数本身
        } else {
            let res = fn.apply(this, argArr)
            argArr = []
            return res
        }
    }
}
const curryAdd = curry(add)
console.log(curryAdd(1)(2, 3)())
