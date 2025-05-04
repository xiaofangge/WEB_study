new Promise((resolve) => {
    resolve(1)
}).then(value => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(value)
            resolve(2)
        }, 1000)
    })
}).then(value => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(value)
            resolve()
        }, 1000)
    })
})