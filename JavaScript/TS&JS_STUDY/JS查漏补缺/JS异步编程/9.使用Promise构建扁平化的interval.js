const interval = (delay, callback) => {
    return new Promise((resolve, reject) => {
        let id = setInterval(() => {
            callback(id, resolve)
        }, delay)
    })
}

interval(1000, (id, resolve) => {
    console.log(999)
    clearInterval(id)
    resolve("fulfilled")
}).then(value => {
    console.log(value)
})