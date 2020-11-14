(async () => {
    const { range } = require('rxjs');
    const { map, filter, scan } = require('rxjs/operators');

    const source$ = range(0, 10);

    const sub = source$.pipe(
        filter(x => x % 2 === 0),
        map(x => x + x),
        scan((acc, x) => acc + x, 0)
    )
    console.log('测试同步：start');
    // 可重复订阅
    sub.subscribe(x => console.log(x))
    sub.subscribe(x => console.log(x))
    console.log('测试同步：end');
})()