# virtualDOM

+ [参考: 如何实现虚拟dom](https://github.com/livoras/blog/issues/13)

+ 为什么要用virtual dom
  传统的DOM操作起来太大了，遍历起来几百个属性，相对于 DOM 对象，原生的 JavaScript 对象处理起来更快

+ virtual dom 基本步骤
  1. 用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
  2. 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
  3. 把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了
