function resolveTimeout2(value, timeout) {
    return new Promise((resolve, reject) => setTimeout(() => resolve(value), timeout))
}
function rejectTimeout2(reason, timeout) {
    return new Promise((resolve, reject) => setTimeout(() => reject(reason), timeout))
}
const fruits2 = ['apple', 'banana']
const vegetables2 = ['carrot', 'broccoli']
const promise6 = Promise.any([
    resolveTimeout2(fruits2, 1000),
    resolveTimeout2(vegetables2, 2000),
])

// 1秒之后...
const list6 = async () => {
    const result = await promise6
    console.log(result) // 输出: ['apple', 'banana']
}
list6()


// 一个promise被reject之后，其他promise依然会继续执行
const promise7 = Promise.any([
    rejectTimeout2('fruits2 is not good', 1000),
    resolveTimeout2(vegetables2, 2000)
])
// 2秒之后...
const list7 = async () => {
    const result = await promise7
    console.log(result) // 输出: ['carrot', 'broccoli']
}
list7()


// 所有的promise都reject之后，Promise.any()会返回一个rejected的promise
const promise8 = Promise.any([
    rejectTimeout2('fruits2 is not good', 1000),
    rejectTimeout2('vegetables2 is not good', 2000)
])
// 2秒之后...
const list8 = async () => {
    try {
        const result = await promise8
        console.log(result) // 输出: All promises were rejected]
    } catch (error) {
        console.log(error) // 输出: Error: All promises were rejected
    }
}
list8()