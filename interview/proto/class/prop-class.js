// prototype实现继承

function Creature(category) {
    this.category = category || 'categoryName'
}
function People(name, age) {
    // 属性
    this.name = name || 'liming'
    this.age = age || 28
    // 实例方法
    this.sleep = function () {
        console.log(this.name + '正在睡觉')
    }
}
People.prototype.eat = function (food) {
    console.log(this.name + '正在吃：' + food);
}

// let p = new People('lh')
// p.sleep()
// p.eat('hh')

/**-------------------- 原型链继承 --------------------*/
// 优点：简单易于实现，父类的新增的实例与属性子类都能访问
// 缺点：可以在子类中增加实例属性，如果要新增加原型属性和方法需要在new 父类构造函数的后面
// 无法实现多继承
// 创建子类实例时，不能向父类构造函数中传参数

// function Woman() {
//     this.womanSleep = function() {
//         console.log('woman' + this.name + 'is sleeping')
//     }
// }
// Woman.prototype = new People();
// let womanObj = new Woman();
// womanObj.womanSleep()
// womanObj.sleep()
// womanObj.eat('food')

/**-------------------- 借用构造函数继承（伪造对象、经典继承） --------------------*/
// 优点： 可以实现多继承， 解决了子类构造函数向父类构造函数中传递参数
// 缺点：
// 方法都在构造函数中定义，无法复用
// 不能继承原型属性/方法，只能继承父类的实例属性和方法

// function Woman(name) {
//     //继承了People
//     People.call(this); //People.call(this，'wangxiaoxia'); 
//     // 继承了Creature
//     Creature.call(this)
//     this.name = name || 'renbo'
// }
// let womanObj = new Woman();
// console.log(womanObj.category)
// womanObj.sleep()
// womanObj.eat('111') // 会报错，不存在

/**-------------------- 实例继承 --------------------*/
// 优点：不限制调用方式、简单，易实现
// 缺点：不能多次继承
// function Woman(name) {
//     let instance = new People()
//     instance.name = name || '实例继承'
//     return instance
// }

/**-------------------- 组合式继承 --------------------*/
// function Woman(name, age) {
//     People.call(this, name, age)
// }
// Woman.prototype = new People();
// Woman.prototype.constructor = Woman;
// let wonmanObj = new Woman('ren', 27);
// wonmanObj.eat('hh'); 

/**-------------------- 寄生组合继承 --------------------*/

//子类
// function Woman(name,age){
//     //继承父类属性
//     People.call(this,name,age)
//   }
//   //继承父类方法
//   (function(){
//     // 创建空类
//     let Super = function(){};
//     Super.prototype = People.prototype;
//     //父类的实例作为子类的原型
//     Woman.prototype = new Super();
//   })();
//   //修复构造函数指向问题
//   Woman.prototype.constructor = Woman;
//   let womanObj = new Woman();

/**-------------------- ES6继承 --------------------*/
//class 相当于es5中构造函数
//class中定义方法时，前后不能加function，全部定义在class的protopyte属性中
//class中定义的所有方法是不可枚举的
//class中只能定义方法，不能定义对象，变量等
//class和方法内默认都是严格模式
//es5中constructor为隐式属性
class People {
    constructor(name = 'wang', age = '27') {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} ${this.age} eat food`)
    }
}
//继承父类
class Woman extends People {
    constructor(name = 'ren', age = '27') {
        //继承父类属性
        super(name, age);
    }
    eat() {
        //继承父类方法
        super.eat()
    }
}
let wonmanObj = new Woman('xiaoxiami');
wonmanObj.eat();

//   ES5继承和ES6继承的区别

// es5继承首先是在子类中创建自己的this指向，最后将方法添加到this中

// Child.prototype=new Parent() || Parent.apply(this) || Parent.call(this)

// es6继承是使用关键字先创建父类的实例对象this，最后在子类class中修改this