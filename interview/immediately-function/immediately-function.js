let y = (function (x) {
    return x * x
})(3)
console.log('立即执行函数结果', y);

(() => {
    console.log('没有返回值的立即执行函数');
})()