const resolveTimeout3 = (value: any, delay: number) => {
    return new Promise((resolve) => setTimeout(() => resolve(value), delay))
}
const rejectTimeout3 = (reason: any, delay: number) => {
    return new Promise((resolve, reject) => setTimeout(() => reject(reason), delay))
}

const fruits3 = ['apples', 'lemons'];
const vegetables3 = ['tomatoes', 'potatoes'];

// 1.完成所有promise
const allPromise1 = Promise.all([
    resolveTimeout3(fruits3, 2000),
    resolveTimeout3(vegetables3, 1000)
])
// 等待2秒后
const list1 = async () => {
    const result = await allPromise1;
    console.log("result1 => ", result);  //  [ [ 'apples', 'lemons' ], [ 'tomatoes', 'potatoes' ] ]
}
list1();


// 2.一个promise失败
// const allPromise2 = Promise.all([
//     rejectTimeout3(new Error("fruits3 is rejected"), 5000),
//     resolveTimeout3(vegetables3, 1000)
// ])
// // 等待5秒后
// const list2 = async () => {
//     try {    
//         const result = await allPromise2;
//         console.log("result2 => ", result);  //  [ Error: fruits3 is rejected ]
//     } catch (error) {  
//         console.log("error2 => ", error);  //  Error: fruits3 is rejected
//     }
// }
// list2();

// 3.全部promise失败,取第一个失败的reason
const allPromise3 = Promise.all([
    rejectTimeout3(new Error("fruits3 is rejected"), 5000),
    rejectTimeout3(new Error("vegetables3 is rejected"), 1000)
])
// 等待5秒后
const list10 = async () => {
    try {    
        const result = await allPromise3;
        console.log("result3 => ", result);  //  不输出
    } catch (error) {  
        console.log("error3 => ", error);  //  error3 =>  Error: vegetables3 is rejected
    }
}
list10();