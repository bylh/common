class Cat {
    constructor(name, color) {
        // 不是绑在原型链上的
        this.name = name
        this.color = color
    }
}

let instance = new Cat('c1', 'white')
console.log(instance.name)
Cat.name = 'c11'
console.log(instance.name)
console.log('Cat.name', Cat.name)
console.log(Cat.prototype.name) // undefined 说明不是在原型链实现的

// 继承使用原型链实现？？
class BigCat extends Cat {
    constructor(name, color) {
        super(name, color)
    }
}

bigInstance = new BigCat('c2', 'black')
console.log(bigInstance.name)

