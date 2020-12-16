/*************** a.js**********************/
// commonjs
// let count = 0
// exports.count = count; // 输出值的拷贝
// exports.add = () => {
//     //这里改变count值，并不会将module.exports对象的count属性值改变
//     count++;
// }

// es6 module
console.log('我是a.js,被引入了')
export let count = 0 // 输出的是值的引用，指向同一块内存
export const add = () => {
    count++
}
