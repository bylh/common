// 链接 https://juejin.im/post/5c19c1b6e51d451d1e06c163

function Person(name) {
    this.name = name
  }
  let p = new Person('Tom');
  console.log(Person.prototype, p.__proto__ === Person.prototype);