interface Admin {
    name: string,
    age: number
}

interface User {
    name: string,
    sayHi(): () => void
}

declare function employee() : Admin | User;
// let emp = employee()
// emp.name = '小芳'


type T1 = string & number // type T1 = never

console.log("----------------------")

type T3 = string & string;              // type T3 = string
type T4 = string & string & string;     // type T4 = string


// ============== 交叉类型的索引签名 =============
type TypeA = {
    [key: string]: string;
}

type TypeB = {
    [key: number]: string;
}

type MergedType = TypeA & TypeB;

const mergedObject: MergedType = {
    name: "test",
    gender: "Male",
    city: "Jin Hua",
    1: "abc"
}

console.info(mergedObject['name'])  // test
console.info(mergedObject['gender'])    // Male
console.info(mergedObject['city'])  // Jin Hua
console.info(mergedObject[1])   // abc


// 交叉类型的调用签名
console.log('------------------------')
type FunctionA = (x: number, y: number) => number;
type FunctionB = (x: string, y: string) => string;

type FunctionType = FunctionA & FunctionB
const funcType: FunctionType = (x: any, y: any) => x + y;

console.log(funcType(10, 20))   // 30
console.log(funcType("10", "20"))   // 1020



// 交叉类型的构造签名
interface Foo {
    new (name: string): string
}
interface Bar {
    new (name: number): number
}

type FooBar = Foo & Bar;
declare const T: FooBar
const instance1 = new T('xiaofang')
const instance2 = new T(12)
console.log("instance1 => ", instance1)
console.log("instance2 => ", instance2)