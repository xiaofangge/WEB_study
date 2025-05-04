// Promise.all() 的痛点
const delay = (n: any) => new Promise(resolve => setTimeout(resolve, n));
const promises = [delay(100).then(() => 1), delay(200).then(() => 2)]
Promise.all(promises).then(console.log) // [1, 2]

const promises3 = [
    delay(100).then(() => 1),
    delay(200).then(() => 2),
    Promise.reject(3)
]
// Promise.all(promises3).then(console.log)  //  This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "3".]


Promise.all(promises3).then(console.log).catch(console.error) // 3

// 使用·Promise.allSettled()·可以解决上述问题
Promise.allSettled(promises3).then(console.log) 
// [
//     { status: 'fulfilled', value: 1 },
//     { status: 'fulfilled', value: 2 },
//     { status: 'rejected', reason: 3 }
// ]