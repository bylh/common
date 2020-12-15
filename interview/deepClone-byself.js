const symbolName = Symbol();
const obj = {
    objNumber: new Number(1),
    number: 1,
    objString: new String('ss'),
    string: 'stirng',
    objRegexp: new RegExp('\\w'),
    regexp: /w+/g,
    date: new Date(),
    function: function () { },
    array: [{ a: 1 }, 2],
    [symbolName]: 111
}
obj.d = obj;
x = [{ a: 1 }, 2]
const getType = (obj) => {
    return Object.prototype.toString.call(obj).slice(8, -1)
}
function deepClone(obj, hash = new WeakMap()) {
    if (hash.has(obj)) { // hash中存在则直接返回
        console.log('存在？？？')
        return hash.get(obj)
    }
    type = getType(obj)
    if (type !== 'Object' && type !== 'Array') {
        console.log('直接返回', obj);
        return obj
    }
    let Con = obj.constructor
    let newObj = new Con()
    hash.set(obj, newObj)
    Reflect.ownKeys(obj).forEach(key => {
        newObj[key] = deepClone(obj[key], hash)
    })
    return newObj
}
y = deepClone(x)
console.log(y)

const o = deepClone(obj)
console.log('000', o)
console.log(o.objNumber === obj.objNumber);
console.log(o.number === obj.number);
console.log(o.objString === obj.objString);
console.log(o.string === obj.string);
console.log(o.objRegexp === obj.objRegexp);
console.log(o.regexp === obj.regexp);
console.log(o.date === obj.date);
console.log(o.function === obj.function);
console.log(o.array[0] === obj.array[0]);
console.log(o[symbolName] === obj[symbolName]);