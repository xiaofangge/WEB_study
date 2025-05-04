// 从动态内容中获取的值




// 特点
// 1. 任何类型的值都可以赋值给unknow
let unknow: unknown

unknow = '123'
unknow = 123
unknow = true



// 2.unknow 只能赋值给自身和any类型的值
let unknow2: unknown
let un: unknown = unknow2
let any: any = unknow2
// let str: string = unknow2   // 不能将类型“unknown”分配给类型“string”
// let str: string = unknow2   // 不能将类型“unknown”分配给类型“string”


// 3.任何类型与unknow类型的联合类型都是unknow，除了any类型
type U1 = string | unknown      // type U1 = unknown
type U2 = number | unknown      // type U2 = unknown
type U3 = any | unknown         // type U3 = any


// 4.任何类型与unknow类型的交叉类型都是其本身
type K1 = string & unknown      // type K1 = string
type K2 = number & unknown      // type K2 = number
type K3 = any | unknown         // type K3 = any


// 5.unknow可以使用类型断言为其他类型
let value: unknown = 'Hello, this is a unknow type data'
let str2: string = value as string

// 6.unknow和typeof一起使用
const str3 = "Echo"
function checkLength(value: unknown) {
    // console.log(value.length)       // “value”的类型为“未知
}
function checkLength2(value: unknown) {
    if (typeof value === 'string') {
        console.log(value.length)
    }
}
checkLength2(str3)


// 7.只能进行等于和不等于的判断，其他操作会报错
function func(x: unknown) {
    // x === 5
    // x !== 5
    // x >= 0  // 报错
}