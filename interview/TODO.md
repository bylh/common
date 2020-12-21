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

## web app

1. web app 原理 [参考](https://segmentfault.com/a/1190000010356403)
    + react native 和cordova的区别[知乎](https://www.zhihu.com/question/47053259)
    + ionic cordova原理
     ios wkwebview(ios8以前是uiwebview)
    + Native调用js原理 (在android中，native与js的通讯方式与ios类似，ios中的通过schema方式在android中也是支持的。)
     ios uiweb调用javascript方法原理：stringByEvaluatingJavaScriptFromString可以执行脚本，所以可以在window对象
     中暴露JSBridge全局对象，通过JSBridge去操作js

     ```javascript
        webview.setDataToJs = function(data) {
        webviewstringByEvaluatingJavaScriptFroString("JSBridge.trigger(event, data)")
        }
    ```

    + js调用Native原理
      在UIWebView内发起的所有网络请求，都可以通过delegate函数在Native层得到通知。这样，我们就可以在UIWebView内发起一个自定义的网络请求，通常是这样的格式：(jsbridge://methodName?param1=value1&param2=value2)

2. web app 自适应布局
   + 使用媒体查询（效率低，写太多的媒体查询对性能有影响）

    ```css
     @media screen and (min-width: 312px) and (max-width: 413px) {
         html {font-size: 16px}
     }
    ```

## electron

1. electron原理 [知乎](https://zhuanlan.zhihu.com/p/138128748)
   + 浏览器的多进程架构，为什么舍弃单进程架构转用多进程架构
   + electron 通信原理
  
## webscoket、socket

1. websocket简介
（1）建立在 TCP 协议之上，服务器端的实现比较容易。

（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

（3）数据格式比较轻量，性能开销小，通信高效。

（4）可以发送文本，也可以发送二进制数据。

（5）没有同源限制，客户端可以与任意服务器通信。

（6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。

## 浏览器页面间通信

1. BroadcastChannel
   页面1：
   const bc = new BroadcastChannel('alienzhou');
   bc.postMessage('hello')
   页面2：
   const bc = new BroadcastChannel('alienzhou');
   bc.onmessage = function(e) {
    console.log('receive:', e.data);
};
2. serviceWorker
3. localStorage
   页面1：
   window.addEventListener('storage', function (e) {
    if (e.key === 'ctc-msg') {
        const data = JSON.parse(e.newValue);
        const text = '[receive] ' + data.msg + ' —— tab ' + data.from;
        console.log('[Storage I] receive message:', text);
    }
});
    页面2：
    mydata.st = +(new Date);
    window.localStorage.setItem('ctc-msg', JSON.stringify(mydata));

4. indexDB
5. websocket

## node相关

## graphql和restful的比较

1. 扩展性，单个RESTful接口返回数据越来越臃肿
比如获取用户信息/users/:id，最初可能只有id、昵称，但随着需求的变化，用户所包含的字段可能会越来越多，年龄、性别、头像、经验、等级，等等等等

2. 某个前端展现，实际需要调用多个独立的RESTful API才能获取到足够的数据

3. 代码即文档： GraphQL会把schema定义和相关的注释生成可视化的文档，从而使得代码的变更，直接就反映到最新的文档上，避免RESTful中手工维护可能会造成代码、文档不一致的问题。

4. 参数类型强校验
RESTful方案本身没有对参数的类型做规定，往往都需要自行实现参数的校验机制，以确保安全。
但GraphQL提供了强类型的schema机制，从而天然确保了参数类型的合法性

## 前端工程化

1. 模块化 (webpack、cdn)
   资源模块化（文件、图片）、代码模块化（js、css）

2. 组件化（从业务和ui层面的划分）继承、扩展

3. 规范化
    流程规范化
    目录结构的制定
    编码规范 （eslint stylelint）
    前后端接口规范
    文档规范
    组件管理
    Git分支管理
    Commit描述规范 (git hook)
    定期CodeReview
    视觉图标规范

4. 自动化
   脚本部署
   自动化构建

5. 高性能、稳定性