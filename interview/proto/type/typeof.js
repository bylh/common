// document.all的历史原因 https://zhuanlan.zhihu.com/p/22314932
console.log(document.all) // 可以看到是所有dom元素
Array.from(document.all) // 可以转换为可遍历的对象
// 可遍历
for(let item of document.all) {
    console.log(item)
}

// 但是
console.log(typeof document.all === 'undefined') // true
document.all == null && document.all == undefined // true

if (document.all) {
    // IE
} else {
    // 非IE
}

function test() {}
typeof test // 'function'