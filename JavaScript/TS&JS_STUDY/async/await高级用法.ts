// 1、异步过滤函数
async function asyncFilter(array:any[], predicate:any) {
    const results = await Promise.all(array.map(predicate))
    return array.filter((value, index) => results[index])
}
export const Sleep = (ms:number)=> {
    return new Promise(resolve=>setTimeout(resolve, ms))
  }
// 示例
async function isOddNumber(n:number) {
    await Sleep(100) // 模拟异步操作
    return n % 2 !== 0
}

async function filterOddNumbers(numbers: number[]) {
    return asyncFilter(numbers, isOddNumber);
}

filterOddNumbers([1, 2, 3, 4, 5]).then(console.log) // [1, 3, 5]


// 在async函数中使用await链式调用
// class ApiClient {
//     constructor() {
//         this.value = null;
//     }

//     async firstMethod() {
//         this.value = await fetch('')
//     }
// }


// 结合async/await和事件循环
async function asyncSetTimeout(fn:Function, ms:number) {
    await new Promise(resolve => setTimeout(resolve, ms))
    fn();
}

asyncSetTimeout(() => console.log('Timeout after 2 seconds'), 2000)