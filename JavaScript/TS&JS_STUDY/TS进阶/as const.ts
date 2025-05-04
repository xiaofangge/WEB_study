let b = '瑞川' // let b: string


// 转为值类型
let b2 = '瑞川' as const // let b2: '瑞川'


const arr1 = [b, b2, 89, true] // const arr1: (string | number | boolean)[]

// 转为元组类型
const arr3 = [b, b2, 89, true] as const // const arr2: readonly ['瑞川', '瑞川', 89, true]

const obj1 = {
    name: '瑞川'
}

// 转为只读类型
const obj2 = {
    name: '瑞川' 
} as const;


// 数组使用 as const 断言
let one = 'xiaofang'
let two = 2024
// 转为元组
let list = <const>[one, two]; // let list: readonly [string, number]
let ele = list[1]
// ele = 'abc' // 不能将类型“string”分配给类型“number”
console.log("ele => ", ele)



// 解构中使用 as const
function fun() {
    let a = 'xiaofang'
    let b = (x: number, y: number): number => x + y
    // return [a, b] as [string, Function]
    // return [a, b] as [typeof a, typeof b]
    return [a, b] as const
}
let [n, m] = fun()
console.info(m(20, 80)) // 100

// let [n, m] = fun() as [string, Function] // 解构
// console.log(m(20, 80))  // "string | ((x: number, y: number) => number)" 类型的部分要素不可调用。
// console.info((m as Function)(20, 80)) // 100
// console.log((m as (x: number, y: number) => number)(20, 80)) // 100
// console.info(m(20, 80)) // 100