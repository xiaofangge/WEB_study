// 宏任务
setTimeout(() => {
    console.log("setTimeout")
})

new Promise(resolve => {
    resolve()
    console.log("promise")
}).then(() => {
    // 微任务
    console.log("成功")
})
console.log("后盾人")