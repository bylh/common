// 参考 (https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md)
// 点运算符
let dotReg = new RegExp(".ar", "g"); // g全局， i忽略大小写
// dotReg = new RegExp(/.ar/g);
console.log('元字符 .ar 测试', dotReg.test('target'));