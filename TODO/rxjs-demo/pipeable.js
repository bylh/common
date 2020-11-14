(async () => {
    const { range } = require('rxjs');
    const { map, filter, scan } = require('rxjs/operators');

    const source$ = range(0, 10);

    const sub = source$.pipe(
        filter(x => x % 2 === 0),
        map(x => x + x),
        scan((acc, x) => acc + x, 0)
    )
    // 可重复订阅
    sub.subscribe(x => console.log(x))
    sub.subscribe(x => console.log(x))

})()