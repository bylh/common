/* 
proxy是针对整个对象的，不需要使用Object.keys()去遍历处理，但是和defineProperty一样嵌套的还是要递归处理
 */

obj = {
    name: 'Eason',
    age: 30
}
// Reflect.get():获取对象身上某个属性的值，类似于 target[name]。
// Reflect.set():将值分配给属性的函数,返回一个Boolean，如果更新成功，则返回true。
// let handler = {
//     get (target, key, receiver) {
//         console.log('get', key, receiver)
//         return Reflect.get(target, key, receiver)
//     },
//     set(target, key, value, receiver) {
//         console.log('set', key, value)
//         return Reflect.set(target, key, value, receiver)
//     }
// }
// 递归处理
let handler = {
    get(target, key, receiver) {
        console.log('get', key)
        // 递归创建并返回
        if (typeof target[key] === 'object' && target[key] !== null) {
            return new Proxy(target[key], handler)
        }
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        console.log('set', key, value)
        return Reflect.set(target, key, value, receiver)
    }
}

let proxy = new Proxy(obj, handler)
console.log(proxy.name)
proxy.name = 'bylh'

let proxyArr = new Proxy([], handler)
proxyArr.push(1)