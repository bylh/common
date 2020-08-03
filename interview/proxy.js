let target = {}
let p = new Proxy(target, {})
p.a = 37

console.log(target.a)

let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer')
            }
            if (value > 200) {
                throw new RangeError('The age is out of range')
            }
        }
        obj[prop] = value
        return true
    }
}
let person = new Proxy({}, validator)
person.age = 100
console.log(person.age)


// 数组劫持

let arr = new Proxy([], {
    set: function(target, key , value) {
        console.log('target, key , value', target, key, value);
        target[key] = value
        return true
    }
})

arr.push(1);