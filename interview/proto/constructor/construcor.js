// 什么是构造函数
// constructor 是一种用于创建和初始化class创建的对象的特殊方法。 （MDN的定义）

// es6之前是没有class对象的，用函数来表示对象，函数本身就是构造函数，会在prototype上显示地创建constructor指向函数本身，如
let x = []
console.log(x.constructor === Array) // true
// 构造函数指向的是他本身是由谁构造的， []是由Array构造而来的，Array由native function构造而来的
Array.constructor === Function

