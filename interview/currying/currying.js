function add (x, y) {
    return x + y
}
console.log('add()函数的参数个数', add.length);
// 柯里化？闭包？？？ 简单实现
function curriedAdd(x) {
    return function (y) {
        return x + y
    }
}

let inc = curriedAdd(1)
// console.log(inc(2)) // 3  1+2
// console.log(inc(5)) // 6  1+5

// 通用实现

function currying(fn, ...args1) {
    return function(...args2) {
        return fn(...args1, ...args2)
    }
}

let increment = currying(add, 1)
console.log(increment(2, 3, 4))
console.log(increment(5))


function trueCurrying(fn, ...args) {

    if (args.length >= fn.length) {
        return fn(...args)
    }

    return function (...args2) {
        return trueCurrying(fn, ...args, ...args2)
    }
}

let trueInc = trueCurrying(add, 1)
console.log(trueInc(5, 6, 7))
