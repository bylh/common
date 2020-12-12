// 手动实现new 操作符最终版
function _new(fn, ...args) {
    const obj = Object.create(fn.prototype);
    const res = fn.apply(obj, args);  // 构造函数可能直接返回新值
    const type = typeof res;
    if((type === "object" || type === "function") && res !== null) {
      return res;
    }
    return obj;
  }


// // 手动实现一个new 操作符

// function FakeNew() {
//     let obj = {};

//     // 将类数组 arguments 转为数组，同时将第一个参数也就是构造函数 shift 出来
//     let Constructor = [].shift.apply(arguments);

//     // 绑定原型
//     obj.__proto__ = Constructor.prototype;

//     // 调用构造函数，将 obj 当做 this 传入
//     let res = Constructor.apply(obj, arguments);
//     console.log(typeof res)
//     // 返回
//     return typeof res === 'object' ? res : obj;
// }

// function User(name) {
//     this.name = name;
// }

// User.prototype.getName = function () {
//     return this.name;
// }
// let u = FakeNew(User, 'leo');

