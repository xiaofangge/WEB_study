// 隐式装箱
// var s1 = "call_me_R"
// s1.job = "fronted engineer"
// s1.sayHello = function () {
//     console.log('Hello Kitty')
// }
// console.log(s1.job)     // undefined
// s1.sayHello() // TypeError: s1.sayHello is not a function



// 显式装箱
var name = new String("call_me_R")
name.job = "fronted engineer"
name.sayHi = function () {
    console.log("Hello Kitty")
}
console.log(name.job)       // fronted engineer
name.sayHi()                // Hello Kitty



console.log("------------------------------")
var objNum = new Number(64)
var objStr = new String("64")
console.log(typeof objNum)      // object
console.log(typeof objStr)      // object

// 拆箱
console.log("objNum valueOf() => ", typeof objNum.valueOf())    // number   想要的
console.log("objNum toString() => ", typeof objNum.toString())   // string   不想要的
console.log("objStr valueOf() => ", typeof objStr.valueOf())    // string   不想要的
console.log("objStr toString() => ", typeof objStr.toString())  // string   想要的