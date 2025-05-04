const queue = (nums) => {
    let promise = Promise.resolve()
    nums.map(num => {
        promise = promise.then(_ => {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(num)
                    resolve()   // 改变状态
                }, 1000)
            })
        })
    })
}

queue([1, 2, 3, 4, 5])
// 1
// 2
// 3
// 4
// 5

const queue2 = (tasks) => {
    let promise = Promise.resolve()
    tasks.map(task => {
        promise = promise.then(_ => {
            return task()
        })
    })
}

const task1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("task1")
            resolve()
        }, 1000)
    })
}
const task2 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("task2")
            resolve()
        }, 1000)
    })
}
queue2([task1, task2])