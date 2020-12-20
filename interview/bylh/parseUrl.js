url = 'https://www.baidu.com?test=1'
function parseUrl(url) {
    let params = {}
    if (!url) {
        return ''
    }
    let paramsStr = url.split('?')[1]
    if (paramsStr) {
        paramsStr.split('&').forEach(str => {
            arr = str.split('=')
            params[arr[0]] = arr[1]
        });
    }
    return params
}
console.log(parseUrl(url))

// 正则实现
function parseUrlByReg(url) {
    let reg = new Reg
}