# TODO

## vue3相关

1. vue3为什么舍弃了class api
   + class api对typescript的支持不太友好
     + 基于函数的 API 天然对类型推导很友好，因为 TS 对函数的参数、返回值和泛型的支持已经非常完备
   + 打包尺寸
     + 基于函数的 API 每一个函数都可以作为 named ES export 被单独引入，这使得它们对 tree-shaking 非常友好。没有被使用的 API 的相关代码可以在最终打包时被移除。同时，基于函数 API 所写的代码也有更好的压缩效率，因为所有的函数名和 setup 函数体内部的变量名都可以被压缩，但对象和 class 的属性/方法名却不可以。
2. vue3为什么需要包装对象
   + 我们知道在 JavaScript 中，原始值类型如 string 和 number 是只有值，没有引用的。如果在一个函数中返回一个字符串变量，接收到这个字符串的代码只会获得一个值，是无法追踪原始变量后续的变化的。因此，包装对象的意义就在于提供一个让我们能够在函数之间以引用的方式传递任意类型值的容器
   + 包装对象在模板中自动展开
3. 类型推导使用defineComponent: 为了能够在 TypeScript 中提供正确的类型推导，我们需要通过一个函数来定义组件

## vue

1. vue $set实现原理
   + // 进行响应式处理
        + 数组索引赋值
            使用splice
            target.length = Math.max(target.length, key)
            利用数组的splice变异方法触发响应式, target.splice(key, 1, val)
        + 对象属性赋值
            defineReactive(ob.value, key, val)
            ob.dep.notify()
2. webpcak相关
   + vue-loader
     vue-loader需要