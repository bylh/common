Promise.all = function (promiseArr) {
    let res = []
    if (!promiseArr || !promiseArr.length) {
        return res
    }
    return new Promise((resolve, reject) => {
        promiseArr.forEach((instance, index) => {
            // 此处为什么不使用instance.then而要使用Promise.resolve(instance)
            // 因为promiseArray中可能存在不是Promise的类型，此时需要用Promise.resolve包装一下
            Promise.resolve(instance).then(value => {
                res[index] = value // 注意不能用push, 因为需要保证顺序
                if (res.length === promiseArr.length) {
                    resolve(res)
                }
            }, err => {
                reject(err)
            })
        });
    })
}

Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};