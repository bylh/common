Promise.all = function (promiseArr) {
    let res = []
    if (!promiseArr || !promiseArr.length) {
        return res
    }
    return new Promise((resolve, reject) => {
        promiseArr.forEach((instance, index) => {
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