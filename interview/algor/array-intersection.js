/**
 * 求数组的交集
 */
// simple
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])
let intersectionSet = new Set([...a].filter(x => b.has(x))) // a中筛选出b中也有的，并且去重
let intersetionArr = Array.from(intersectionSet)
console.log(intersetionArr)

// use reduce to solve
function intersect(...args) {
    if (args.length === 0) {
        return []
    }

    if (args.length === 1) {
        return args[0]
    }

    return [...new Set(args.reduce((result, arg) => {
        return result.filter(item => arg.includes(item))
    }))]
}

console.log(intersect([1, 2, 3, 2], [4, 3, 2, 2]))

