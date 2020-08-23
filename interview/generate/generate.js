function* IdGenerator() {  // ⇽--- 定义生成器函数IdGenerator
    let id = 0;  // ⇽--- 一个始终记录ID的变量，这个变量无法在生成器外部改变  
    while (true) {
        yield ++id;
    }
} // ⇽--- 循环生成无限长度的ID序列

const idIterator = IdGenerator(); // ⇽--- 这个迭代器我们能够向生成器请求新的 ID值
const ninja1 = { id: idIterator.next().value };
const ninja2 = { id: idIterator.next().value };
const ninja3 = { id: idIterator.next().value }; // ⇽--- 请求3个新ID值

// 断言（断言成功不会输出信息的）
console.assert(ninja1.id === 1, "First ninja has id 1");
console.assert(ninja2.id === 2, "Second ninja has id 2");
console.assert(ninja3.id === 3, "Third ninja has id 3");  //⇽--- 测试运行结果

// 打印
console.log(ninja1, "First ninja has id 1");
console.log(ninja2, "Second ninja has id 2");
console.log(ninja3, "Third ninja has id 3");  //⇽--- 测试运行结果

