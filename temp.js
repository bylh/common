function add(...args) {
    return args.reduce((acc, cur) => acc + cur)
}
function curry(fn) {
    let argArr = []
    return function temp(...args) {
        if (args.length > 0) {
            argArr = [
                ...argArr,
                ...args
            ]
            return temp
        } else {
            let res = fn.apply(this, argArr)
            argArr = []
            return res
        }
    }
}
const curryAdd = curry(add)
console.log(curryAdd(1)(2, 3)())
