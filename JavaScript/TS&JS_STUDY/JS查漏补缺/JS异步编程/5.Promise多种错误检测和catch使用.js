
new Promise((resolve, reject) => {
    // throw new Error("出错了")
    // reject("失败")
    resolve("成功")
}).then(value => {
    console.log(value)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("中间失败")
        }, 2000)
    })
}).then(value => {
    console.log("中间 value => ", value)
}).catch(reason => {
    // console.log(reason.message) // 出错了
    console.log(reason)
})