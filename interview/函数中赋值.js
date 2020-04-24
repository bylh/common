/*注意：js函数全部是值传递，此处数组不变的原因是，数组传递的其实是数组地址，slice不改变原数组
* 而，list = list.slice(1)相当于 简单的变量赋值（数组地址），其实不会改变函数外面的值*/

function test(list) {
    list = list.slice(1);
}

let a = [0, 1, 2, 3, 4, 5];
test(a);
console.log(a);

/*上面的其实地址赋值和简单的变量赋值其实是一样的*/

let b = 10;
function test1(x) {
    x = 11;
}
console.log('b:', b);

