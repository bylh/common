x = {a: 1, b: 2, c: {m: 20}}

y = Object.freeze(x)
y.a = 11
y.c.m = 100


x.a === y.a  // true 都为2 没有被改变

x.c.m === y.c.m /// true, 都为100，改变了，说明为浅冻结


function deepFreeze(obj) {
    let keys = Reflect.ownKeys(obj)
    keys.forEach(key => {
        let value = obj[key]
        if (typeof value === 'object' && value != null) {
            deepFreeze(value)
        }
    })
    return Object.freeze(obj)
}


// 如何解冻一个对象
Object.assign({}, y)
// 使用场景
// 大数据列表中，放在data中使用Object.freeze去冻结属性，保证不会使用defineProperty拦截和监听，保证性能