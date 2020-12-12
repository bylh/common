let x = []

console.log(x instanceof Array)  // true

console.log(x instanceof Object) // true

function new_instance_of(leftVaule, rightVaule) { 
    let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
    leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
    while (true) {
    	if (leftVaule === null) {
            return false;	
        }
        if (leftVaule === rightProto) {
            return true;	
        } 
        leftVaule = leftVaule.__proto__ 
    }
}

// instanceof 只针对引用数据类型，只要在其原型链上能找到判断的数据类型，就会返回true

