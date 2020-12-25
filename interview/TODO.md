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

## 前端项目优化方案

1. webpack 层面
   tree shaking
   unglifyjs压缩代码
   使用compression-webpack-plugin开启gzip压缩(nginx也要同步开启)
  怎么判断是否配置成功：content-encording: gizp
  loadsh、rxjs按需引入 配合babel-import-plugin
  前端优化之DNS预解析
  CDN 引入，然后在webpack中externals中配置
  配合css-loader

  关键路径渲染

  ```html
  <link href="print.css"    rel="stylesheet" media="print"></link>
  ```
  
  script标签设置 async、defer（DomcontentLoaded之前）

2.页面优化：
   dns预解析
   使用cdn
   减少https请求
   服务端渲染ssr
   内存和缓存
   图片懒加载
   防抖、节流

   vue：
   v-if / v-show

3. 安全性
   csrf
   xss

4. 数据库
   原子性、一致性、隔离性、持久性


   http 请求行 + 头部信息 + 空白行 + body

   translate3d 的元素进行 GPU 加速

## 回流和重绘

1. 回流
    当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。
    页面首次渲染
    浏览器窗口大小发生改变
    元素尺寸或位置发生改变
    元素内容变化（文字数量或图片大小等等）
    元素字体大小变化
    添加或者删除可见的DOM元素
    激活CSS伪类（例如：:hover）
    查询某些属性或调用某些方法

    一些常用且会导致回流的属性和方法：

    clientWidth、clientHeight、clientTop、clientLeft
    offsetWidth、offsetHeight、offsetTop、offsetLeft
    scrollWidth、scrollHeight、scrollTop、scrollLeft
    scrollIntoView()、scrollIntoViewIfNeeded()
    getComputedStyle()
    getBoundingClientRect()
    scrollTo()

2. 重绘
    当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

3. 如何避免
    CSS

    避免使用table布局。
    尽可能在DOM树的最末端改变class。
    避免设置多层内联样式。
    将动画效果应用到position属性为absolute或fixed的元素上。
    避免使用CSS表达式（例如：calc()）。

    JavaScript

    避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
    避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
    也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
    避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
    对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

## 操作系统

1 什么是进程与线程，有何区别？进程与程序有何区别？

（1）线程是进程的一个实体，一个进程可以拥有多个线程，多个线程也可以并发执行。一个没有线程的进程也可以看做是单线程的，同样线程也经常被看做是一种轻量级的进程。并且进程可以不依赖于线程而单独存在，而线程则不然。

（2）进程是并发程序在一个数据集合上的一次执行过程，进程是系统进行资源分配和调度的独立单位，线程是进程的实体，它是比进程更小的能够独立执行的基本单元，线程自己不拥有任何系统资源，但是它可以访问其隶属进程的全部资源。

（3） 与进程的控制表PCB相似，线程也有自己的控制表TCB，但是TCB中所保存的线程状态比PCB表少得多。

进程的作用与定义：是为了提高CPU的执行效率，为了避免因等待而造成CPU空转以及其他计算机硬件资源的浪费而提出来的。

线程的引入：例如，有一个Web服务器要进程的方式并发地处理来自不同用户的网页访问请求的话，可以创建父进程和多个子进程的方式来进行处理，但是创建一个进程要花费较大的系统开销和占用较多的资源。除外，这些不同的用户子进程在执行的时候涉及到进程上下文切换，上下文切换是一个复杂的过程。所以，为了减少进程切换和创建的开销，提高执行效率和节省资源，人们在操作系统中引入了"线程（thread）"的概念。

进程是具有一定独立功能的程序关于某个数据集合上的一次运行活动，进程是系统进行资源分配和调度的一个独立单位。
    线程是进程的一个实体，是CPU调度和分派的基本单位，它是比进程更小的能独立运行的基本单位。

线程自己基本上不拥有系统资源，只拥有一点在运行中必不可少的资源（如程序计数器，一组寄存器和栈），但是它可与同属一个进程的其他的线程共享进程所拥有的全部资源。一个线程可以创建和撤销另一个线程，同一个进程中的多个线程之间可以并发执行。由于线程基本不拥有系统资源，所以在进行切换时，线程切换的开销远远小于进程。

　进程与应用程序的区别在于应用程序作为一个静态文件存储在计算机系统的硬盘等存储空间中，而进程则是处于动态条件下由操作系统维护的系统资源管理实体。

进程间通信主要包括管道, 系统IPC(包括消息队列,信号量,共享存储)
    管道( pipe )：管道是一种半双工的通信方式，数据只能单向流动，而且只能在具有亲缘关系的进程间使用。进程的亲缘关系通常是指父子进程关系。
    有名管道 (named pipe) ： 有名管道也是半双工的通信方式，但是它允许无亲缘关系进程间的通信。
    信号量( semophore ) ： 信号量是一个计数器，可以用来控制多个进程对共享资源的访问。它常作为一种锁机制，防止某进程正在访问共享资源时，其他进程也访问该资源。因此，主要作为进程间以及同一进程内不同线程之间的同步手段。
    消息队列( message queue ) ： 消息队列是由消息的链表，存放在内核中并由消息队列标识符标识。消息队列克服了信号传递信息少、管道只能承载无格式字节流以及缓冲区大小受限等缺点。
    信号 ( sinal ) ： 信号是一种比较复杂的通信方式，用于通知接收进程某个事件已经发生。
    共享内存( shared memory ) ：共享内存就是映射一段能被其他进程所访问的内存，这段共享内存由一个进程创建，但多个进程都可以访问。共享内存是最快的 IPC 方式，它是针对其他进程间通信方式运行效率低而专门设计的。它往往与其他通信机制，如信号两，配合使用，来实现进程间的同步和通信。
    套接字( socket ) ： 套解口也是一种进程间通信机制，与其他通信机制不同的是，它可用于不同及其间的进程通信

## 计算机网络

TCP和UDP是OSI模型中的运输层中的协议。TCP提供可靠的通信传输，而UDP则常被用于让广播和细节控制交给应用的通信传输。

两者的区别大致如下：

TCP面向连接，UDP面向非连接即发送数据前不需要建立链接
TCP提供可靠的服务（数据传输），UDP无法保证
TCP面向字节流，UDP面向报文
TCP数据传输慢，UDP数据传输快

OSI 七层网络模型  应用层、表示层、会话层、传输层、网络层、数据链路层
TCP/IP （ Transmission Control Protocol/Internet Protocol ）：传输控制协议 / 因特网互联协议，是一个四层的计算机网络模型，
分别为：应用层、传输层、网络层、网络接口层

ARP地址解析协议

常见linux命令 netstat ipconifg

HTTPS 握手的五个阶段

+ 客户端向服务器发送支持的SSL/TSL的协议版本号，以及客户端支持的加密方法，和一个客户端生成的随机数
+ 服务器确认协议版本和加密方法，向客户端发送一个由服务器生成的随机数，以及数字证书
+ 客户端验证证书是否有效，有效则从证书中取出公钥，生成一个随机数，然后用公钥加密这个随机数，发给服务器
+ 服务器用私钥解密，获取发来的随机数
+ 客户端和服务器根据约定好的加密方法，使用前面生成的三个随机数，生成对话密钥，用来加密接下来的整个对话过程

http2.0
HTTP 2.0把解决性能问题的方案内置在了传输层，通过多路复用来减少延迟，通过压缩 HTTP首部降低开销，同时增加请求优先级和服务器端推送的功能。
  3.1 支持多路复用
         多路复用允许同时通过单一的 HTTP 2.0 连接发起多重的请求-响应消息，即所有HTTP 2.0 连接都是持久化的，而且客户端与服务器之间也只需要一个连接即可，所有数据流共用同一个连接 ，减少了因http链接多而引起的网络拥塞（在 HTTP1.1 协议中，同一时间，浏览器会针对同一域名下的请求有一定数量限制），解决了慢启动针对突发性和短时性的http链接低效的问题。
3.2 将通信的基本单位缩小为帧
             即应用层(HTTP)和传输层(TCP or UDP)之间增加一个二进制分帧层，因此在多向请求和响应时，客户端和服务器可以把HTTP消息分解为互不依赖的帧，然后乱序发送，最后再在另一端把它们重新组合起来，解决了http 1.*的对手阻塞问题。 

3.3 首部压缩
              http 2.0支持DEFLATE和HPACK 算法的压缩。
3.4 服务端推送
          指客户端请求之前发送数据的机制，在 HTTP 2.0 中，服务器可以对客户端的一个请求发送多个响应。

content-type

TCP 三次握手

有什么要问面试官的：

在这的成长和晋升路线

项目相关：

众途户外：
1、做地图
开始使用metor、js、mongo那一套，随着项目越来越大遇到三个问题
1、项目越来越大，用js无类型，不好维护
2、前后端各自维护自己的数据结构，用submodules 定义了一套typescript的schema
3、状态管理：地图的交互无疑是复杂的，需要全局的事件管理，传统的，根据addeventlisten等处理起来比较费劲，借助rxjs进行事件分装合并（Rx.fromEvent）
传统的方案当然也能做，当时对事件的处理不够灵活，使用rxjs能合并比如说多次事件合并为一次 （merge），debounce、filter、map

路线数据是相当大的，耗费流量，如何压缩
4、webWorkers压缩地图路线数据
  数据点 -> stringify ->pako-> Uint8Array -> ArrayBuffer->buffer
  解压： FileReaderSync类的readAsArrayBuffer解析blob -> ArrayBuffer->uint8Array->pako->string->jsonParse(string)
5、Couchbase、pouchDB做离线数据（户外路线可能会没有信号），可以先收集gps坐标、离线数据先在本地数据库加到task_runner队列中，在联网后主动同步到后端

命题平台：
1、业务员、项目经理、项目负责人、学科负责人、责任编辑、审校员（三审三校）
状态的流转、怎么承接不同命题平台的需求

utilbox_serv基础工具服务、kb_serv知识库资源服务、se_serv搜索引擎服务、yuanpei图片化的试题、kboe智能推荐
如何整合资源、与各个平台对接，如何把整个平台抽离出来
充分利用其它平台的资源：搭建公共的api, 整合其他平台的资源，海量的试题资源，ocr图片识别服务，utilbox试卷下载服务、se_kb搜索服务、kboe推荐系统
命题平台借助其他平台的资源，然后进行试题、试卷加工,输出到kb试题库入库，将试题输出到其他平台

审核系统： 富文本对比，试卷、试题编辑、试卷下载转word方案

sso单点登录： [sso](https://www.jianshu.com/p/75edcc05acfd)

ES2020 ?链式操作符

用 ?? 表示。如果表达式在??的左侧运算符求值为 undefined 或 null

Promise.allSettled： 我们知道 Promise.all 具有并发执行异步任务的能力。但它的最大问题就是如果参数中的任何一个promise为reject的话，则整个Promise.all 调用会立即终止，并返回一个reject的新的 Promise 对象。

import()支持在js中动态引入