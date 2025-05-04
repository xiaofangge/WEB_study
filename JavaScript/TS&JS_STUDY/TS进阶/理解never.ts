// 函数抛出异常
const throwError = (message: string) => {
    throw new Error(message)
}



// 不会有返回值的函数
const infinitionLoop = () => {
    while (true) {
        console.log("Hello, my name is Echo")
    }
}


// 类型判断或类型缩小的细化
type Value = number | string;

const processValue = (value: Value) => {
    if (Object.prototype.toString.call(value) === '[object Number]') {

    } else if (Object.prototype.toString.call(value) === '[object String]') {

    } else {
        // const val : never = value;
    }
}



// never类型特点
// 1、never类型会从联合类型中移除  有点类似于 或关系
type T1 = number | never;   // type T1 = number
type T2 = string | never;   // type T2 = string
type T3 = boolean | never;  // type T3 = boolean
type T4 = any | never;      // type T4 = any
type T5 = unknown | never;  // type T5 = unknown
type T6 = never | never;    // type T6 = never
type T7 = "abc" | never;    // type T7 = "abc"
type T8 = 123 | never;      // type T8 = 123


// 筛选
type Filter<T, U> = T extends U ? T : never;
type RESULT = Filter<"Echo" | 26 | true | "广州", string>  // type RESULT = "Echo" | "广州"


// 2、never类型与任意类型的交叉类型都是never    有点类似于 且关系
type N1 = number & never;   // type N1 = never
type N2 = string & never;   // type N2 = never
type N3 = boolean & never;  // type N3 = never
type N4 = any & never;      // type N4 = never
type N5 = unknown & never;  // type N5 = never
type N6 = never & never;    // type N6 = never
type N7 = "abc" & never;    // type N7 = never
type N8 = 123 & never;      // type N8 = never


// 3、其他类型不能赋值给never
let n: never;
// n = "ECho"  // 不能将类型“string”分配给类型“never”
// n = 123     // 不能将类型“number”分配给类型“never”
// ...