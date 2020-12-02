const express = require('express');
const app = express();

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
const server = app.listen(8888, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})