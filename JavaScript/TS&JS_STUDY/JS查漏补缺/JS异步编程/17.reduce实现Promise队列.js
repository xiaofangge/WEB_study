const reduceQueue = (nums) => {
    nums.reduce((promise, num) => {
        return promise.then(_ => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(num)
                    resolve()
                }, 1000)
            })
        })
    }, Promise.resolve())
}

reduceQueue([1, 2, 3, 4, 5])