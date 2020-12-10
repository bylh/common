// 闭包定义私有变量
var Foo = function(){
    var name = 'apple';
    this.getName = function(){
        return name;
    };
    this.setName = function(str){
        name = str;
    };
};
var foo = new Foo();

foo.name;        // undefined, name是私有变量, 无法直接访问
foo.getName();   // 'apple'
foo.setName('banana');    // name changed to 'banana'