// 创建对象的几种方式
/**-------------------- 构造函数模式 --------------------*/
function Person(name) {
    this.name = name
    // function和箭头函数中的this有什么区别
    this.getName = function() {
        console.log('this:::', this, this.name)
        return this.name
    }
    /*
    箭头函数不会创建自己的this，所以它没有自己的this，它只会从自己的作用域链的上一层继承this
    箭头函数没有自己的this，它会捕获自己在定义时（注意，是定义时，不是调用时）所处的外层执行环境的this，并继承这个this值。
    所以，箭头函数中this的指向在它被定义的时候就已经确定了，之后永远不会改变。
     */
    this.getName1 = () => {
        console.log('this:::', this, this.name)
        return this.name
    }
}
let p = new Person('hh')
p.getName() // hh
p.getName1() // hh
let getName = p.getName
getName() // undefined
let getName1 = p.getName1
getName1() // hh   // 箭头函数会保留上层的this, 定义时确定好就不会再变

