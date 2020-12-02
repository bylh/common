const express = require('express');
const app = express();

// // 处理options请求
// app.options('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:52330')
//     res.header('Access-Control-Allow-Credentials', true)
//     res.header('Access-Control-Request-Method', 'PUT,POST,GET,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token')

//     next()
// })
app.get('/', (req, res) => {
    res.send('Hello World');
})
app.get('/jsonp', (req, res) => {
    const result = {
        code: 0,
        message: 'jsonp success'
    }
    res.send(`${req.query.cb}(${JSON.stringify(result)})`);
})
app.post('/iframe_form', (req, res) => {
    res.json({
        data: 'iframe_form接口返回成功'
    })
})

// CORS

// CORS的全称是Cross-Origin Resource Sharing(跨域资源共享)，是处理跨域问题的标准做法。CORS的请求分为简单请求和非简单请求。

// 只要同时满足以下两大条件，就属于简单请求：

// 请求方法是以下三种之一
// HEAD
// GET
// POST
// HTTP的头信息不超出以下几种字段
// Accept
// Accept-Language
// Content-Language
// Last-Event-ID
// Content-Type：只限application/x-www-form-urlencoded、multipart/form-data、text/plain

// http://localhost:52330/interview/%E8%B7%A8%E5%9F%9F/header-cors.html
app.get('/test-cross', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:52330')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Request-Method', 'PUT,POST,GET,DELETE,OPTIONS')
    // 随便写了个cookie，浏览器里可能会报错，可以忽略，仅供演示
    res.cookie('a', 1)
    res.send(`是否跨域`);
})


// 而非简单请求会先发一个预检测请求（preflight），只有当预检测请求通过之后，才会发出真正的请求：
// 复杂跨域接口
app.post('/complex_cors', (req, res) => {
    const result = {
        code: 0,
        message: 'complex cors',
        data: req.query
    }

    res.header('Access-Control-Allow-Origin', 'http://localhost:52330')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Request-Method', 'PUT,POST,GET,DELETE,OPTIONS')
    // 随便写了个cookie，浏览器里可能会报错，可以忽略，仅供演示
    res.cookie('a', 1)

    res.send(result)
})
const server = app.listen(8888, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})