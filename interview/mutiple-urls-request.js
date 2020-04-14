import fetch from 'node-fetch';

function sendRequest(urls, max, callback) {
    const len = urls.length;
    let idx = 0;
    let counter = 0;

    function _request() {
        // 有请求，有通道
        while (idx < len && max > 0) {
            max--; // 占用通道
            fetch(urls[idx++]).finally(() => {
                max++; // 释放通道
                counter++;
                if (counter === len) {
                    return callback();
                } else {
                    _request();
                }
            });
        }
    }
    _request();
}

let urls = [
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2580986389,1527418707&fm=27&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1995874357,4132437942&fm=27&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2640393967,721831803&fm=27&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1548525155,1032715394&fm=27&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2434600655,2612296260&fm=27&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2160840192,133594931&fm=27&gp=0.jpg'
];

let max = 4
let callback = () => {
    console.log('所有请求完成了')
}

sendRequest(urls, max, callback);
