// [继承的多种方式](https://github.com/mqyqingfeng/Blog/issues/16)
/**-------------------- 原型链继承 --------------------*/
function Parent() {
    this.names = ['1', '2']
    this.getNames = function() {
        console.log('getNames:', this.names)
    }
}
Parent.prototype.getPropNames = function() {
    console.log('getPropNames:', this.names)

}
function Child() {}
Child.prototype = new Parent()

// 创建实例
child1 = new Child()
child1.names.push('3')
child1.getNames() // 1、2、3
child1.getPropNames()

child2 = new Child()
child2.getNames() // 1、2、3
child2.getPropNames()

// 由上述例子可以看出names变化会作用到所有实例上 即引用类型的属性被所有实例共享

/**-------------------- 构造函数继承（经典继承） --------------------*/

function Parent() {
    this.names = ['1', '2']
}
function Child() {
    Parent.call(this)
}
// 创建实例
child1 = new Child()
child1.names.push('3')
console.log(child1.names) // 1、2、3

child2 = new Child()
console.log(child2.names) // 1、2

// 与上一种的原型链继承方式相比，避免了引用类型的属性被所有实例共享， 可以在Child中像Parent传参

// 缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法。

/**-------------------- 寄生组合式继承 --------------------*/

function Parent(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
}
Parent.prototype.getName = function() {
    console.log(this.name)
}
function Child(name, age) {
    Parent.call(this, name)
    this.age = age
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

// 封装通用方法
function myExtend(Child, Parent) {
    // function F() {}
    // F.prototype = Parent.prototype
    // let f = new F()
    // 与上面写法等价
    // Object.create的模拟
    // Object.create = function( o ) {
    //     function f(){}
    //     f.prototype = o;
    //     return new f;
    // }
    let p = Object.create(Parent.prototype);
    p.constructor = Child
    Child.prototype = p
}

