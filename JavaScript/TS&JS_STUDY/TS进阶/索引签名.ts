let foo: any = {};
foo['Hello'] = 'World'
console.log(foo['Hello']) // World

// 使用场景
// 1、number类型索引签名：用来约束数组
interface numberIndex {
    [index: number]: string;
}
// const testArray:numberIndex = ["1", "2", 3];   // 不能将类型“number”分配给类型“string”。

// 2、string类型索引签名，用于约束对象
const foo2: {
    [index: string]: {message: string}
} = {}

foo2['Hello'] = {message: 'World'}
// foo2['Hello'] = {messages: 'World'} // 对象字面量只能指定已知的属性，但“messages”中不存在类型“{ message: string; }”。是否要写入 message?
console.log(foo2['Hello'].message) // World
// console.log(foo2['Hello'].messages) // 属性“messages”在类型“{ message: string; }”上不存在。你是否指的是“message”?

// 3、同时使用string和number类型的索引签名 - number索引的返回值必须是string索引返回值类型的子类型
interface ArrStr {
    [key: string]: string | number;
    [index: number]: number;  // “number”索引类型“number”不能分配给“string”索引类型“string”
    length: number;
}


type Animal = {
    name: string;
}
type Dog = Animal & {
    breed: string;
}
// type Okay = {
//     [x: string]: Dog;
//     [x: number]: Animal  // “number”索引类型“Animal”不能分配给“string”索引类型“Dog”。
// }
type Okay = {
    [x: string]: Animal;
    [x: number]: Dog 
}

// 一个索引签名可以通过映射类型来使索引字符串为联合类型中的一员
type UnionKeys = 'a' | 'b' | 'c';
type FromUnionKeys = { [K in UnionKeys]?: number }
const goods: FromUnionKeys = { a: 1, b: 2, c: 3 };
// const bads: FromUnionKeys = { a: 1, b: 2, c: '3' }; // 类型“'3'”不能分配给类型“number”。