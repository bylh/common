# node相关

## 什么是事件循环

+ 事件循环是 Node.js 处理非阻塞 I/O 操作的机制--尽管 JavaScript 是单线程处理的——当有可能的时候，它们会把操作转移到系统内核中去。

+ commonjs和esModule的区别
  1. commonjs是加载的时候运行，esModule是编译的时候运行
  2. commonsjs 输出的是值的浅拷贝，esModule是输出值的引用
  3. commonsjs具有缓存，首次加载会完整运行对象会输出一个对象浅拷贝到内存，下次引用直接从内存获取