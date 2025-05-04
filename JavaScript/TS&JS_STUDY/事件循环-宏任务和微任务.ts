// console.log(1)

// setTimeout(() => {
//     console.log(2)   
// })

// const p = new Promise((resolve, reject) => {
//     console.log(3)
//     resolve(1000)
//     console.log(4)
// })
// p.then(data => {
//     console.log(data)
// })

// console.log(5)              // 1 3 4 5 1000 2


// 练习2
// console.log(11)
// setTimeout(() => {
//     console.log(12)
//     let p = new Promise((resolve, reject) => {
//         resolve(13)
//     })
//     p.then(res => {
//         console.log(res)
//     })
//     console.log(15)
// }, 0)
// console.log(14)  // 11 14 12 15 13


// 练习3
// setTimeout(() => {
//     console.log(1)
// }, 0)
// new Promise((resolve, reject) => {
//     console.log(2)
//     resolve('p1')
//     new Promise((resolve, reject) => {
//         console.log(3)
//         setTimeout(() => {
//             resolve('setTimeout2') // 不执行
//             console.log(4)
//         }, 0)
//         resolve('p2')
//     }).then(data => {
//         console.log(data)
//     })
//     setTimeout(() => {
//         resolve('setTimeout1') // 不执行
//         console.log(5)
//     }, 0)
// }).then(data => {
//     console.log(data)
// })
// console.log(6)  
// 2
// 3
// 6
// p2
// p1
// 1
// 4
// 5



// 练习4
// async function async1() {
//     console.log("async1 start")
//     await async2();
//     console.log("async1 end")
// }
// async function async2() {
//     console.log("async2")
// }
// console.log("script start")
// setTimeout(function () {
//     console.log('setTimeout');
// }, 0)

// async1()
// script start
// async1 start
// async2
// async1 end
// setTImeout


// 练习5
// function fun() {
//     console.log("A");
//     setTimeout(() => {
//         console.log("B");    // 微任务
//     }, 5);
// }
// for (var i = 0; i < 100; i++) {
//     fun();
// }

