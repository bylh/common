const http = require('http');
const url = require('url');
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log('req', request.params);
    if (request.url.startsWith('/jsonp')) {
        const result = {
            code: 0,
            message: 'jsonp success'
        }
        const queryData = url.parse(request.url, true).query;
        // 组织成 cb(res)的调用形式，参数就是后端返回给前端的参数
        response.write(`${queryData.cb}(${JSON.stringify(result)})`); //write a response
        response.end(); //end the response
    } else {
        // 发送响应数据 "Hello World"
        response.end('Hello World\n');
    }
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');