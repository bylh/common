function Foo() {
    getName = function(){ alert(1); };
    return this;
}
Foo.getName = function() { alert(2); };
Foo.prototype.getName = function(){ alert(3); };
var getName = function() { alert(4); };
function getName(){ alert(5); }


Foo.getName(); // 2
getName(); //  4
Foo().getName(); // 1
getName(); // 1
// new 构造函数() // new字符是怎么匹配执行的new 构造函数，然后遇到()才执行
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 1


// function T() {this.in = () => {console.log('hh')}}
// T.prototype.in = () => {console.log('pro')}