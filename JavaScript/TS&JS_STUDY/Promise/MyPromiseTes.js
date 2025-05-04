// 引入MyPromise.js
const MyPromise = require("./MyPromise");
const myPromise = new MyPromise((resolve, reject) => {
    resolve("success");
    reject("error");
});
myPromise.then(value => {
    console.log("myPromise value => ", value);   // myPromise value =>  success
}, reason => {
    console.log("myPromise reason => ", reason);
})


// 处理异步逻辑
const myPromise2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 2000)
});
myPromise2.then(value => {
    console.log("myPromise2 value => ", value);   // myPromise2 value =>  success
}, reason => {
    console.log("myPromise2 reason => ", reason);
})

// 处理多个函数
const myPromise3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve("success")
    }, 2000)
})
myPromise3.then(value => {
    console.log(1);
    console.log("myPromise3 resolve => ", value)
})
myPromise3.then((value) => {
    console.log(2);
    console.log("myPromise3 resolve => ", value)
})
myPromise3.then((value) => {
    console.log(3); // 3
    console.log("myPromise3 resolve => ", value)  // myPromise3 resolve =>  success
})


// 链式调用
const myPromise4 = new MyPromise((resolve, reject) => {
    // 目前这里只处理同步的问题
    resolve("success")
})
const other = () => {
    return new MyPromise((resolve, reject) => {
        resolve("other")
    })
}
myPromise4.then(value => {
    console.log("myPromise4 value => ", value) // myPromise4 value =>  success
    return other()
}).then(value => {
    console.log("myPromise4 other value => ", value) // myPromise4 other value =>  other
})


// 链式循环调用
// const myPromise5 = new MyPromise((resolve, reject) => {
//     resolve(100)
// })
// const p1 = myPromise5.then(value => {
//     console.log("p1 1 value => ", value)  // p1 value =>  100
//     return p1;
// })
// // 运行的时候会走reject
// p1.then(value => {
//     console.log("p1 2 value => ", value)  // p1 value =>  100
// }, reason => {
//     console.log("p1 3 reason => ", reason)
// })


// 捕获错误及then链式调用其他状态代码补充
const myPromise6 = new MyPromise((resolve, reject) => {
    throw new Error("执行器错误");
})
myPromise6.then(value => {
    console.log("myPromise6 value => ", value)
}, reason => {
    console.log("myPromise6 reason => ", reason.message)
})


const myPromise7 = new MyPromise((resolve, reject) => {
    resolve("success")
})
// d第一个then方法中的错误要在第二个then方法中捕获到
myPromise7.then(value => {
    console.log("myPromise7 value => ", value)  // myPromise7 value =>  success
    throw new Error("then错误");
}, reason => {
    console.log("myPromise7 reason => ", reason.message)
}).then(value => {
    console.log("myPromise7 then value => ", value)
}, reason => {
    console.log("myPromise7 then reason => ", reason.message)  // myPromise7 then reason =>  then错误
})


// then中的参数变为可选
const promise = new Promise((resolve, reject) => {
    resolve(100)
})
promise.then()
.then()
.then()
.then(value => console.log("参数可选 value => ", value))


const promise8 = new MyPromise((resolve, reject) => {
    resolve('succ')
})
promise8.then().then().then(value => console.log("promise8 => ", value))  // promise8 =>  succ

const promise9 = new MyPromise((resolve, reject) => {
    reject('err')
})
promise9.then().then().then(value => console.log("promise9 => ", value), reason => console.log("promise9 => ", reason))  // promise9 =>  err


// 实现resolve和resolve的静态调用
MyPromise.resolve().then(() => {
    console.log("resolve static");  // resolve static
    return MyPromise.resolve(4)
}).then(value => {
    console.log("resolve static value => ", value) // resolve static value =>  4
})