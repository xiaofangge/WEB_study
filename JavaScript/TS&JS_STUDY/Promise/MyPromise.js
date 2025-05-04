// 定义三个常量表示状态
const PENDING = Symbol('pending');
const FULFILLED = Symbol('fulfilled');
const REJECTED = Symbol('rejected');

class MyPromise {
    constructor(executor) {
        // executor 是一个执行器，进入会立即执行
        // 并传入resolve和reject两个函数作为参数
        // 捕获执行器错误
        try {
            executor(this.resolve, this.reject);
        } catch(error) {
            // 如果有错误，就直接执行 reject
            this.reject(error)
        }
    }

    // 存储状态的变量，初始值是pending
    status = PENDING;
    // 存储成功的值或失败的原因

    // resolve和reject为什么要用箭头函数
    // 如果直接调用的话，普通函数this指向的是window或者undefined
    // 用箭头函数就可以让this指向当前实例对象
    // 成功之后的值
    value = null;
    // 失败之后的原因
    reason = null;

    // 存储成功回调函数
    onFullFilledCallbacks = [];
    // 存储失败回调函数
    onRejectedCallbacks = [];

    // resolve静态方法
    static resolve = (parameter) => {
        // 如果参数是 MyPromise 实例对象，直接返回
        if (parameter instanceof MyPromise) {
            return parameter
        }
        // 转成常规模式
        return new Promise(resolve => {
            resolve(parameter)
        })
    }

    // reject静态方法
    static reject = (reason) => {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }



    // 更改成功后的状态
    resolve = (value) => {
        // 只有状态是等待，才会执行状态修改
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
            // resolve里面将所有成功的回调拿出来执行
            if (this.onFullFilledCallbacks.length > 0) {
                for (;;) {
                    this.onFullFilledCallbacks.shift()(value)
                    if (this.onFullFilledCallbacks.length === 0) {
                        break;
                    }
                }
            } 
        }
    }
    // 更改失败后的状态
    reject = (reason) => {
        // 只有状态是等待，才会执行状态修改
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            // reject里面将所有失败的回调拿出来执行 
            if (this.onRejectedCallbacks.length > 0) {
                for (;;) {
                    this.onRejectedCallbacks.shift()(reason)
                    if (this.onRejectedCallbacks.length === 0) {
                        break;
                    }
                }
            }
        }
    }

    // then方法，用于添加成功和失败的回调函数
    then(onFullFilled, onRejected) {
        // 如果不传，就使用默认函数
        const realOnFulfilled = typeof onFullFilled === 'function' ? onFullFilled : value => value;
        const realOnRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

        // 为了链式调用：这里直接创建一个MyPromise，并在后面 return 出去
        const promise2 = new MyPromise((resolve, reject) => {
            const handleFulfilled = () => {
                // 创建一个微任务等待 promise2 完成初始化
                queueMicrotask(() => {
                    try {
                        // 调用成功回调，并且把值返回
                        const x = realOnFulfilled(this.value);
                        // 传入 resolvePromise 函数，用来处理 x 的值
                        this.resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            const handleRejected = () => {
                // 创建一个微任务等待 promise2 完成初始化
                queueMicrotask(() => {
                    try {
                        // 调用失败回调，并且把原因返回
                        const x = realOnRejected(this.reason);
                        // 传入 resolvePromise 函数，用来处理 x 的值
                        this.resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                })
            }

             // 判断状态
            if (this.status === FULFILLED) {
                handleFulfilled()
                // 对rejected和pending状态进行改造
            } else if (this.status === REJECTED) {
                // 调用失败回调，并且把原因返回
                handleRejected()
            } else if (this.status === PENDING) {
                // 处理pending，处理异步逻辑
                // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
                // 等到执行成功失败函数的时候再传递
                this.onFullFilledCallbacks.push(handleFulfilled);
                this.onRejectedCallbacks.push(handleRejected);
            }
        })
        return promise2
    }

    resolvePromise(promise2,x, resolve, reject) {
        // 识别自己
        if (promise2 === x) {
            return reject(new TypeError('Chaining cycle detected for promise'));
        }
        if (typeof x === 'object' || typeof x === 'function') {
            // x 为 null 直接返回，走后面的逻辑会报错
            if (x === null) { 
                return resolve(x);
            }

            let then;
            try {
                // 获取 x 的 then 方法
                then = x.then;  
            } catch (error) {
                // 如果取 x.then 的值时抛出错误 error，则以 error 为据因拒绝 promise
                return reject(error);
            }

            // 如果 then 是函数，则调用它
            if (typeof then === 'function') {

                let called = false;
                try {
                    then.call(
                        x,
                        // 如果 resolvePromise 以值y为参数被调用，则运行 [[Resolve]](promise, y)
                        y => {
                            // 如果 resolvePromise 和 rejectPromise 均被调用
                            // 活着被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
                            if (called) return;
                            called = true;
                            // 如果 then 方法返回的是一个promise，则递归处理
                            this.resolvePromise(promise2, y, resolve, reject);
                        },
                        // 如果 rejectPromise 以据因 r 为参数被调用，则以 据因 r 拒绝 promise
                        r => {
                            if (called) return;
                            called = true;
                            reject(r);
                        }
                    );
                } catch (error) {
                    // 如果 then 方法抛出了错误 error，则以 error 为据因拒绝 promise
                    // 如果 resolvePromise 和 rejectPromise 均被调用,则直接返回
                    if (called) return;
                    // 否则以 error 为据因拒绝 promise  
                    reject(error);
                }
            } else {
                // 如果 then 不是函数，则以 x 为参数执行 resolve
                resolve(x);
            }
        } else {

            // 如果 x 不是对象或者函数，则直接返回
            resolve(x);
        }
    }
}

module.exports = MyPromise