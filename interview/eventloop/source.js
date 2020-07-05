console.log('script宏任务开始');
console.log('t1');
setTimeout(() => {
    console.log('此时微任务队列为空，执行宏任务');
    console.log("h1")
}, 0);
setTimeout(() => {
    console.log('微任务队列仍然为空，继续执行宏任务');
    console.log("h1-long")
    console.log('开始执行第一个h2');
}, 1);

const p = Promise.resolve();
for(let i = 0; i < 3; i++) {
    p.then(() => {
        setTimeout(() => {
            console.log('h2')
            console.log('执行h2后生成t2 、h3')
            setTimeout(() => console.log("h3"), 0);
            p.then(() => console.log('t2---'));
        }, 0);
        console.log("w1");
        if (i == 2) {
            console.log('第一个宏任务执行后形成的微任务队列执行完毕');
        }
    });
}

console.log("t1");
console.log('script宏任务结束');