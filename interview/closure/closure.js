function sum(arr) {
    return arr.reduce((x, y) => x + y)
}
console.log('sum函数', sum([1, 2, 3, 4]));

function lazySum(arr) {
    return () => {
        return arr.reduce((x, y) => x + y)
    }
}

let sum1 = lazySum([1, 2, 3, 4, 5, 6])
let sum2 = lazySum([1, 2, 3, 4, 5, 6, 7])

console.log('sum1:', sum1())
console.log('sum2:', sum2())
