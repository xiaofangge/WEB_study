function resolveTimeout(value: any, delay: number) {
    return new Promise((resolve) => setTimeout(() => resolve(value), delay))
}
function rejectTimeout(reason: any, delay: number) {
    return new Promise((r, reject) => setTimeout(() => reject(reason), delay))
}

// 使用上面两个函数实现 Promise.race()
const fruits = ['potatoes', 'tomatoes']
const vegetables = ['oranges', 'apples']

const racePromise = Promise.race([
    resolveTimeout(fruits, 5000),
    resolveTimeout(vegetables, 1000),
])
// 等待1秒  
const list = async () => {
    try {
        const fastPromise = await racePromise;
        console.info("fastPromise => ", fastPromise)
    } catch (error) {
        console.log(error)
    }
}
list()  // fastPromise =>  [ 'oranges', 'apples' ]


// const racePromise2 = Promise.race([
//     resolveTimeout(fruits, 2000),
//     rejectTimeout(new Error("Vegetables is empty"), 1000)
// ])
// 等待1秒
// const list2 = async () => {
//     try {
//         const fastPromise2 = await racePromise2;
//         console.info("fastPromise2 => ", fastPromise2)
//     } catch (error) {
//         console.log(error)
//     }
// }
// list2()  // Error: Vegetables is empty



const racePromise3 = Promise.race([
    resolveTimeout(fruits, 2000),
    rejectTimeout(new Error("Vegetables is empty"), 5000)
])
// 等待2秒
const list3 = async () => {
    try {
        const fastPromise3 = await racePromise3;
        console.info("fastPromise3 => ", fastPromise3)
    } catch (error) {
        console.log(error)
    }
}
list3()  // fastPromise3 =>  [ 'potatoes', 'tomatoes' ]


// 所有promise被reject，则返回第一个reject的reason
const racePromise4 = Promise.race([
    rejectTimeout(new Error("Vegetables is empty"), 2000),
    rejectTimeout(new Error("Vegetables is empty"), 5000)
])
// 等待2秒
const list4 = async () => {
    try {
        const fastPromise4 = await racePromise4;
        console.info("fastPromise4 => ", fastPromise4)
    } catch (error) {
        console.log(error)
    }
}
list4()  // Error: Vegetables is empty