// // 对象实例上的__proto__对应对象上的prototype
// const x = {}
// x.__proto__ == Object.prototype

/* Object.defineProperty()的问题主要有三个
1、不能监听数组的变化
2、必须遍历对象的每个属性
3、必须深层遍历对象的每个属性
*/

const arrayMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
// [美: ˌɔːɡmenˈteɪʃn] [英: ˌɔːɡmenˈteɪʃn]  增加
const arrayAugmentations = []
arrayMethods.forEach(method => {
    let origin = Array.prototype[method]
    arrayAugmentations[method] = function () {
        console.log('我被改变了')
        return origin.apply(this, arguments)
    }
})
const list = ['a', 'b', 'c']

list.__proto__ = arrayAugmentations

list.push('d')

// defineProperty用来劫持对象属性一般这么用
obj = { a: {x: 1, y: 2} }
Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
})

function defineReactive(data, key, val) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log('get:::', val)
            return val
        },
        set: function (newVal) {
            if (val === newVal) {
                return
            }
            val = newVal
        }
    })
}

// 面试题
// 设置一个数a,让 a == 1 && a == 2 && a == 3成立
// val = 1
// Object.defineProperty(window, 'a', {
//     get: function () { return ++val; }
// });
// a = [1,2,3]
// a.toString = a.shift;
// if (a == 1 && a == 2 && a == 3) {
//     console.log('yay');
// } 