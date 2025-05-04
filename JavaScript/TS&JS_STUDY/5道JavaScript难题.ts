// 1.默认函数参数&函数长度属性
// 函数length属性用于返回所有函数参数的数量，带有默认值的参数之后不包括在length之中
function foo(a:number, d:number, b:number = 10, c:number, e:number):void {
    console.log(foo.length)
}
foo(1, 2, 2, 3, 10)


console.log("-----------------------------")
// 2.Object.defineProperty()方法及其默认参数
// const obj5 = {
//     "myCompany": ""
// }
// /**
//  * obj — 要定义或修改属性的对象。
//  * prop — 要定义或修改的属性的名称。
//  * descriptors — 属性的描述符。
//  */
// Object.defineProperty(obj5, 'myCompany', {
//     value: 'intspirit'
// })
// console.log("2 => ", obj5.myCompany);
// // delete obj5['myCompany']
// console.log("2 => ", obj5.myCompany);


// 3.Array.map()和parseInt
const numbers = ['9', '10', '11'].map(parseInt)
console.log("numbers => ", numbers)


console.log("-----------------------------")
// 4.使用Object.create和Object.assign克隆对象
class User {
    verified: boolean
    constructor() {
        this.verified = true
    }
}
const user = new User()
// 创建一个新对象，使用现有对象作为新创建对象的原型
const admin = Object.create(user)

const clone1 = {...admin}
const clone2 = Object.assign({}, admin)

console.log(admin.verified, clone1.verified, clone2.verified)  //  true undefined undefined


console.log("-----------------------------")
// 5.字符串函数&instanceof操作符
let str:String = 'Hello'
let str2:String = String('Hello')
console.log(str instanceof String)  // false
console.log(str2 instanceof String) // false