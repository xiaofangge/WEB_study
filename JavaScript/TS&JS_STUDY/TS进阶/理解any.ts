
// 1. 声明变量不提供类型也不提供默认值
let value

value = 123

// 2. 函数参数不加类型
const add  = (a: any, b: any) => a + b


let str: string = 'hello'

// str = 123 // 不能将类型“number”分配给类型“string”。

let anyValue: any;
anyValue = 123;
anyValue = 'hello';
anyValue = true;
anyValue = null;
anyValue = undefined;
anyValue = { name: 'fangruichuan' };
anyValue = [1, 2, 3];


let str2 : any = "Echo"
console.log(str2.length) // 4
console.log(str2.toUpperCase()) // ECHO


let value2: any = 123
value2.toUpperCase() // TypeError: value2.toUpperCase is not a function