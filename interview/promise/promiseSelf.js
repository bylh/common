
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class BylhPromise {
    constructor(fn) {
        this._status = PENDING
        this._value = undefined
        this._resolveQueue = []
        this._rejectQueue = []
        const resolve = (value) => {
            setTimeout(() => {
                if (this._status === PENDING) {
                    this._status = FULFILLED
                    this._value = value
                    while (this._resolveQueue.length > 0) {
                        const callback = this._resolveQueue.shift()
                        callback(this._value)
                    }
                }
            })
        }
        const reject = (value) => {
            setTimeout(() => {
                if (this._status === PENDING) {
                    this._status = REJECTED
                    this._value = value
                    while (this._rejectQueue.length > 0) {
                        const callback = this._rejectQueue.shift()
                        callback(value)
                    }
                }
            })
        }
        fn(resolve, reject)
    }
    // es6 class静态方法绑定在实例本身而不是原型链
    static resolve(value) {
        // 为什么要判断是promise类型？如果是promise类型就直接返回，不需要包一层，否则需要包一层
        return value instanceof BylhPromise ? value : new BylhPromise(resolve => {
            resolve(value)
        })
    }
    static reject(value) {
        return value instanceof BylhPromise ? value : new BylhPromise((resolve, reject) => {
            reject(value)
        })
    }
    then(onFulfilledFn, OnRejectedFn) {
        if (typeof onFulfilledFn !== 'function') {
            onFulfilledFn = value => value
        }
        if (typeof OnRejectedFn !== 'function') {
            OnRejectedFn = err => err
        }
        return new BylhPromise((resolve, reject) => {
            const resolveFn = value => {
                try {
                    const res = onFulfilledFn(value)
                    if (res instanceof BylhPromise) {
                        res.then(resolve, reject)
                    } else {
                        resolve(value)
                    }
                } catch (err) {
                    reject(err)
                }
            }
            const rejectFn = error => {
                try {
                    res = OnRejectedFn(error)
                    if (res instanceof BylhPromise) {
                        res.then(resolve, reject)
                    } else {
                        resolve(err)
                    }
                } catch (err) {
                    reject(err)
                }
            }
            if (this._status === PENDING) {
                this._resolveQueue.push(resolveFn)
                this._rejectQueue.push(rejectFn)
            } else if (this._status === FULFILLED) {
                resolveFn(this._value)
            } else {
                rejectFn(this._value)
            }
        })
    }
    catch(rejectFn) {
        return this.then(undefined, rejectFn)
    }
    finally(callback) {
        return this.then(value => BylhPromise.resolve(callback()).then(() => value),
            err => BylhPromise.reject(callback()).then(() => err))
    }
    static race(arr) {
        return new BylhPromise((resolve, reject) => {
            arr.forEach(item => {
                Promise.resolve(item).then(value => {
                    resolve(value)
                }, err => {
                    reject(err)
                })
            });
        })
    }
    static all(arr) {
        let res = new Array(arr.length)
        let count = 0
        return new BylhPromise((resolve, reject) => {
            arr.forEach((item, i) => {
                Promise.resolve(item).then(value => {
                    res[i] = value
                    count++
                    if (count === arr.length) {
                        resolve(res)
                    }
                }, err => {
                    reject(err)
                })
            })
        })
    }
}


// examples

f1 = (resolve, reject) => {
    setTimeout(() => {
        resolve('setTimeRes')
    }, 10000)
}
f2 = (resolve, reject) => {
    fetch('http://baidu.com').then(res => {
        resolve(res)
    }).catch(err => {
        reject(err)
    })

}
p1 = new BylhPromise(f1)
p2 = new BylhPromise(f2)
pr = BylhPromise.race([p1, p2])
pa = BylhPromise.all([p1, p2])