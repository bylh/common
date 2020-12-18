function bylhBind(fn, context) {
    return function () {
        return fn.apply(context, arguments)
    }
}

// examples

// 系统实现的bind
const org = {
    x: 42,
    getX: function () {
        return this.x;
    }
};
let unboundGetX = org.getX
console.log('unboundGetX(): ', unboundGetX())
console.log('org.getX()', org.getX())

const boundGetX = org.getX.bind(org)
console.log('boundGetX(): ', boundGetX())

// 自己实现的bind方法
const selfBoundGetX = bylhBind(org.getX, org)
console.log('selfBoundGetX()', selfBoundGetX())



// 类？
// this总是指向词法作用域，也就是外层调用者
function Person(name) {
    this.name = name
    this.getName = function() {
        return this.name
    }
    this.getNameArrow = () => {
        return this.name
    }
}
function Car(name) {
    this.name = name
    this.getName = function() {
        return this.name
    }
}

let p = new Person('person')
let c = new Car('car')

const unboundGetName = p.getName
console.log('p.getName()', p.getName())
console.log('unboundGetName()', unboundGetName())
const boundGetName = p.getName.bind(p)
console.log(boundGetName())

const unboundArrowGetName = p.getNameArrow
// 思考，为什么类中的箭头函数可以保留this呢
console.log('unboundArrowGetName()', unboundArrowGetName())

