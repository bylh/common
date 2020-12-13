let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

// const flatten = (arr) => {
//     while (arr.some(item => Array.isArray(item))) {
//         // 为什么这样可行，因为concat会自动展开第一级
//         arr = [].concat(...arr)
//     }
//     return arr
// }
// console.log(flatten(arr))

const flattenReduce = arr => {
    return arr.reduce((pre, cur) => {
        // return pre.concat(Array.isArray(cur) ? flattenReduce(cur) : cur) 
        return Array.isArray(cur) ? [...pre, ...flattenReduce(cur)] : [...pre, cur]
    }, [])
}

console.log(flattenReduce(arr))

// ES6原生支持
// console.log(arr.flat(Infinity))