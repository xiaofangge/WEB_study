const timeout = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}

timeout(2000).then(value => {
    console.log("小芳")
    return timeout(2000)
}).then(value => {
    console.log("小明")
})