const express = require('express');
const app = express();

// // 处理options请求
// app.options('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
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
// http://localhost:52330/interview/%E8%B7%A8%E5%9F%9F/header-cors.html
app.get('/test-cross', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:52330')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Request-Method', 'PUT,POST,GET,DELETE,OPTIONS')
    // 随便写了个cookie，浏览器里可能会报错，可以忽略，仅供演示
    res.cookie('a', 1)
    res.send(`是否跨域`);
})
const server = app.listen(8888, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})