async function fn(args) {
    // ...
}

// 等同于

function fn(args) {
    return spawn(function* () {
        // ...
    });
}

function spawn(genF) {
    const gen = genF()
    return function next(v) {
        return new Promise((resolve, reject) => {
            try {
                const result = gen.next(v)
                if (result.done) {
                    return resolve(result.value)
                }

                return Promise.resolve(result.value).then(next).then(resolve, reject)
            } catch (e) {
                reject(e)
            }
        })
    }()
}

// function spawn(genF) {
//     return new Promise(function (resolve, reject) {
//         const gen = genF();
//         function step(nextF) {
//             let next;
//             try {
//                 next = nextF();
//             } catch (e) {
//                 return reject(e);
//             }
//             if (next.done) {
//                 return resolve(next.value);
//             }
//             Promise.resolve(next.value).then(function (v) {
//                 step(function () { return gen.next(v); });
//             }, function (e) {
//                 step(function () { return gen.throw(e); });
//             });
//         }
//         step(function () { return gen.next(undefined); });
//     });
// }
