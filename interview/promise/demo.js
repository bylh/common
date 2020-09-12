// promise如何查看执行状态

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, 2000)
})
console.log('resolve前', promise)
promise.then(value => {
    console.log(value)
    console.log('resolve后', promise)
}).catch(err => console.log(err))
promise.then(value => {
    console.log(1, value)
}).catch(err => console.log(err))
promise.then(value => {
    console.log(2, value)
}).catch(err => console.log(err))


let promiseRej = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(false)
    }, 2000)
})
console.log('reject前', promiseRej)
promiseRej.then().catch(err => {
    console.log(err) // err其实就是reject的值
    console.log('reject后', promiseRej)
})


// 综上，promise的三种状态即 pending、fulfilled、rejected


