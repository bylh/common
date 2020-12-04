// const express = require('express');
// const app = express();
// // const options = {
// //     etag: false, // 禁用协商缓存
// //     lastModified: false, // 禁用协商缓存
// //     setHeaders: (res, path, stat) => {
// //         // /* 没有缓存（不使用缓存, 每次请求都重新获取） */
// //         // res.set('Cache-Control', 'no-store'); // Status Code: 200

// //         // /* 协商缓存   缓存但重新验证 */
// //         // res.set('Cache-Control', 'no-cache'); // 刷新重复获取：Status Code: 304 Not Modified

// //         // 强缓存，需要关闭以下两个属性
// //         // etag: false, // 禁用协商缓存
// //         // lastModified: false, // 禁用协商缓存
// //         res.set('Cache-Control', 'max-age=10'); // 强缓存超时时间为10秒（此处单位为秒）
// //     },
// // };
// app.use('/', (req, res, next) => {
//     console.log('请求了', req.path)
//     next()
// })
// app.use(express.static((__dirname + '/public'), options));
// app.listen(3500);


// 同上面的代码一样，只不过是另外一种写法
// index.js
const express = require('express')
const path = require('path')
const app = express()

/* 注意：请求的文件如果直接是文件地址如： http://localhost:3500/static/index.js是直接走协商缓存的
（当然etag，lastModified是开启的，若都关闭，则不缓存直接每次都请求文件返回）
若请求地址是http://localhost:3500/static/index.html(index.html中引用index.js)则index.js是按照opts配置的缓存策略缓存的
为什么这么设计？因为默认是index.html（当然也可以是其他命名）中需要包含所有文件的引用，所以index.html必须是拿到最新的（webpack请求打包引用的hash会变，文件数量也可能变）
*/

// 配置1：强缓存
// 一旦缓存了，修改maxAge重启或者修改文件都是不起作用的，还是返回原来的文件
// Status Code: 200 OK (from memory cache)
// const opts = {
//   etag: false,
//   lastModified: false,
//   maxAge: 10000 // 此时的单位是毫秒
// }

// 配置2：协商缓存 (不设置的情况下默认是 Cache-Control: public, max-age=0)？？？？
// 一旦缓存了，修改maxAge重启或者修改文件都是不起作用的，还是返回原来的文件
// Status Code: 304 Not Modified
// const opts = {
//   etag: true,
//   lastModified: true,
// //   maxAge: 0 // 协商缓存必须关闭此配置或者不设置
// }

// 配置3：不缓存
// 每次都重新获取
// Status Code: 200 OK
// const opts = {
//     setHeaders: (res) => {
//         res.set('Cache-Control', 'no-store'); // Status Code: 200
//     }
// }

// 配置3：no-cache
// 允许缓存，但需要验证
// Status Code: 200 OK
// const opts = {
//     setHeaders: (res) => {
//         res.set('Cache-Control', 'no-cache'); // Status Code: 304 Not Modified
//     }
// }

// maxAge=0和no-cache的区别????
const opts = {
    setHeaders: (res) => {
        res.set('Cache-Control', 'no-cache'); // Status Code: 304 Not Modified
    }
    // maxAge: 0
}


app.use('/static', express.static(path.join(__dirname, 'static'), opts))
app.listen(3500);