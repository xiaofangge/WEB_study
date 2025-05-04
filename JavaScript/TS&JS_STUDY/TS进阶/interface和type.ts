// 下面这个函数接收的参数可能是字符串，也可能是函数
type Name = string;
type NameResolver = () => string;
// 联合类型
type NameOrNameResolver = Name | NameResolver
const getName = (n: NameOrNameResolver) => {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
getName("xiaofang")
getName(() => "xiaofang");
// getName(123)


// 两者相同点
// 1、都可以定义一个对象和函数
type addType = (num1: number, num2: number) => number;
interface addTypeInterface {
    (num1: number, num2: number): number;
}
const add1: addType = (num1, num2) => num1 + num2;
const add2: addTypeInterface = (num1, num2) => num1 + num2;
console.log(add1(1, 2)); // 3
console.log(add2(1, 2)); // 3

// 2、都允许继承
// interface 继承 interface
interface Person {
    name: string;
}
interface Student extends Person {
    grade: number;
}
const student: Student = {
    name: "xiaofang",
    grade: 3
}

// type 继承 type
type Person2 = {
    name: string;
}
type Student2 = Person2 & { grade: number }; // 使用交叉类型
const student2: Student2 = {
    name: "xiaofang2",
    grade: 5,
}

// interface 继承 type
type Person3 = {
    name: string;
}
interface Student3 extends Person3 {
    grade: number;
}
const student3: Student3 = {
    name: "xiaofang3",
    grade: 7,
}

// type 继承 interface
interface Person4 {
    name: string;
}
type Student4 = Person4 & { grade: number }; // 使用交叉类型
const student4: Student4 = {
    name: "xiaofang4",
    grade: 9,
}
console.log("student => ", student)
console.log("student2 => ", student2)
console.log("student3 => ", student3)
console.log("student4 => ", student4)


// 2、interface可以，type不行：合并重复声明
interface Teacher {
    name: string;
}
interface Teacher {
    teach: string;
}
const teacher: Teacher = {
    name: "xiaofang",   
    teach: "PE"
}

type Employer = {
    name: string;
}
// type Employer = {  // 标识符“Employer”重复
//     salary: BigInt;
// }


// 定义对象推荐使用type
interface Resp<T> {
    msg: string;
    code: number;
    data: T;
}
type getData<T> = () => Resp<T>;


type Resp2<T> = {
    msg: string;
    code: number;
    data: T;
}
type getData2<T> = () => Resp2<T>; // 可以直接看到定义的类型




type RmKey<T extends Object, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P]
}

type Shape = "circle" | "square" | "traingle"
type SolidShape = "circle";
type NonSolidShape = Exclude<Shape, SolidShape>; // "square" | "traingle"