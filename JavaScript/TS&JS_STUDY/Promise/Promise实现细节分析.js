// Promise.resolve().then(() => {   // 创建状态为fullfilled的Promise对象
//     console.log(0) // 送入 微任务队列排队
//     return Promise.resolve(4)
// }).then((res) => {
//     console.log(res);
// })


// Promise.resolve().then(() => {  // 创建状态为fullfilled的Promise对象
//     console.log(1)  // 送入 微任务队列排队
// }).then(() => {
//     console.log(2)
// }).then(() => {
//     console.log(3)
// }).then(() => {
//     console.log(5)
// }).then(() => {
//     console.log(6)
// })

// 输出结果：
// 0
// 1
// 2
// 3
// 4
// 5
// 6

const MyPromise = require('./MyPromise.js')

MyPromise.resolve().then(() => {
  console.log(0);
  return MyPromise.resolve(4);
}).then((res) => {
  console.log(res)
})

MyPromise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})
// 输出结果：
// 0
// 1
// 2
// 3
// 4
// 5
// 6