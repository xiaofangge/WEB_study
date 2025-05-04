// ======== 纯函数
// 1、不是纯函数：函数每次执行时结果都不一样
const counter = (function () {
    let initValue = 0;
    return function() {
        initValue++;
        return initValue;
    }
})()
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3



// 2、不是纯函数：每次给定相同的输入都给出相同的结果，但是它操作了外部的变量，产生了一个副作用，所以它也不是纯函数
console.log("--------------------------")
let count = 0;
function isYoung(user) {
    if (user.age <= 20) {
        count++;
        return true;
    } else {
        return false;
    }
}
console.log(isYoung({name: 'Tom', age: 25})) // false
console.log(isYoung({name: 'Tom', age: 25})) // false


// 2、懒函数
class User {
    constructor() {
        this.name = 'Tom';
        this.age = 25;
    }
}
// 不使用懒函数
let instance = null;
function user() {
    if (instance !== null) {
        return instance;
    } else {
        instance = new User();
        return instance;
    }
}

// 使用懒函数
var user = function () {
    var instance = new User();
    user = function () {
        return instance;
    }
    return user();
}

// 3、函数组合
console.log("-----------------------------------")
const multiply = (x) => x * 10;
const divide = (x) => x / 2;
const toStr = (x) => `${x}`;
const isLargerThanTen = (x) => x < 10;
const compute = (x) => toStr(divide(multiply(x)))
// 仅支持两个函数参数
const compose = function (fun, f, g) {
    return function (x) {
        return fun(f(g(x)))
    }
}
// const computeFun = compose(toStr, divide, multiply)
// console.log(computeFun(5)) // "25"
// console.log(Object.prototype.toString.call(computeFun(5))) // [object String]

console.log("-----------------------------------")
// 支持任意数量的函数参数
const composeAny = (...funs) => (x) => funs.reduceRight((acc, fun) => fun(acc), x) // reduceRight: 从右往左遍历

const computeFunAny1 = composeAny(divide, divide, multiply)
console.log(computeFunAny1(8)) // 20
console.log(Object.prototype.toString.call(computeFunAny1(8))) // [object Number]
const computeFunAny2 = composeAny(divide, multiply)
console.log(computeFunAny2(5)) // "25"
console.log(Object.prototype.toString.call(computeFunAny2(5))) // [object Number]

const computeFunAny3 = composeAny(toStr, divide, multiply)
console.log(computeFunAny3(8)) // 40
console.log(Object.prototype.toString.call(computeFunAny3(8))) // [object String]

