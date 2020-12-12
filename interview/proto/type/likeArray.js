// Array.from的Polyfill实现中有做对类数组对象的处理(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill)

// 类型化数组 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays

// 讲道理有length属性且它是number就叫类数组……除了arguments NodeList HTMLCollection外，
// string String.prototype function（length属性是参数个数） Function.prototype 各种TypedArray（如Int8Array）
// 总结规律的话，DOM相关的数组基本都是类数组，如window（length属性是frame/iframe数量） 
// storage(比如localStorage、sessionStorage，length属性是里面存的数据的条数，说起来这能算数组吗……) 
// FileList（File API的玩意）除此之外还有好多好多，懒得数了js原生的数组（注意是做数组用的，function什么的不算）
// 除了arguments外基本是真数组，比如Object.keys之类函数的返回值、剩余参数、模板字符串标签函数的参数
// （这玩意名字拗口不说，还有个raw属性，但它真是array……）

// 比较典型的就是arguments