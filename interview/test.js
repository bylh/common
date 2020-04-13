console.log('start: 变量提升，变量作用域');
var a = 10;
function test() {
  a = 100;
  console.log('a: ', a);
  console.log('this.a: ', this.a);
  var a;
  console.log('var a:', a);
}

test();
console.log('end: 变量提升，变量作用域');
/*
结果：
a: 100  // 变量作用域， 在下方的var定义了
this.a: node环境是undefined 浏览器环境this === window所以是10,
var a: 100
*/

console.log('start：变量提升');
(function() {
  var c = d = 3 // 等价于 d = 3; var c = d 函数中声明的变量不带var会添加到window
})();
console.log(d);
// console.log(c)
console.log('end：变量提升');

console.log('start：var循环异步');
// 关键词 单线程， 异步队列
for (var i = 1; i <= 3; i++) {
  // 这样写输出1、2、3因为用了立即执行函数，传入变量相当于多个函数执行，变量值就是传入的变量
  (function(e) {
    setTimeout(function() {
      console.log(e);
    }, 0)
  })(i)
  // 写在外面输出 4、4、4
  // setTimeout(function() {
  //   console.log(i);
  // }, 0)
}
console.log('end：var循环异步');

console.log('start: 变量提升，函数预解析');
function fun() {
  console.log(n);
  var n = 456
  console.log(n);
}
var n = 123;
fun(n);
console.log(n);
console.log('end: 变量提升，函数预解析');

/* ------------------------- 多次绑定bind会无效------------------------------- */
console.log('start: bind')
var bar = function(){
  console.log(this.x);
}
var foo = {
  x:3
}
var sed = {
  x:4
}
var func = bar.bind(foo).bind(sed);
func(); //?

var fiv = {
  x:5
}
var func = bar.bind(foo).bind(sed).bind(fiv);
func(); //?

console.log('end: bind');
