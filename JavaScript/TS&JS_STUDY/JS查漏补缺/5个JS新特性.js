// 1. ====================使用 Object.hasOwn() 代替 in 操作符=====================
// in : 如果指定的属性位于对象或其原型链中，“in”运算符将返回true
const Person = function (age) {
    this.age = age;
}
Person.prototype.name = 'xinchao'
const p1 = new Person(25)
console.log('age' in p1) // true
console.info('name' in p1) // true

// hasOwnProperty() 原型链上的属性不会读取
console.log("-----------------------------")
console.info(p1.hasOwnProperty('age')) // true
console.info(p1.hasOwnProperty('name')) // false

// 不安全
// Object.create(null).hasOwnProperty('name') // Object.create(...).hasOwnProperty is not a function


// Object.hasOwn() 可以避免这两个问题
console.log("-----------------------------")
console.info(Object.hasOwn(p1, 'age')) // true
console.info(Object.hasOwn(p1, 'name')) // false
const object1 = { age: 24 }
console.log(Object.hasOwn(object1, 'age')) // true
const object2 = Object.create({ age: 24 })
console.log(Object.hasOwn(object2, 'age')) // false
const object3 = Object.create(null)
console.log(Object.hasOwn(object3, 'age')) // false


// 2. ==========================使用 # 声明私有属性=========================
console.log("------------------------------")
// _ 声明私有属性可以被外部修改
class Person2 {
    constructor(name) {
        this._money = 1;
        this.name = name;
    }
    get money() {
        return this._money;
    }
    set money(money) {
        this._money = money;
    }
    showMoney() {
        console.info(this._money)
    }
}   
const person2 = new Person2('xiaofang')
console.log(person2.money)  // 1
console.log(person2._money) // 1
person2._money = 2;     // 可以外部去修改
console.log(person2.money)  // 2
console.log(person2._money) // 2

console.log("-----------------")
class Person3 {
    #money = 1;
    constructor(name) {
        this.name = name;
    }
    get money() {
        return this.#money;
    }
    set money(money) {
        this.#money = money;
    }
    showMoney() {
        console.info(this.#money)
    }
}
const person3 = new Person3("fangge")
console.info(person3.money) // 1
// person3.#money = 2; // 属性 "#money" 在类 "Person3" 外部不可访问，因为它具有专用标识符。
person3.money = 2;
console.info(person3.money) // 2
// console.log(person3.#money) // 属性 "#money" 在类 "Person3" 外部不可访问，因为它具有专用标识符。


// 3. ================超好用的数字分隔符=========================
console.info("--------------------")
const sixBillion = 6_000_000_000
console.info(sixBillion)


// 4. =================使用 ?. 简化 && 和 三元运算符
console.info("--------------------")
const obj = null;
console.info(obj && obj.name)
// =
console.info(obj?.name)

// const $title = document.querySelector('.title')
// const title1 = $title ? $title.textContent : undefined
// // =
// const title2 = $title?.textContent;



// 5. ==================BigInt 大数计算===========================
console.log("----------------------------------------------------")
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

console.log(Object.is(Math.pow(2, 53), Math.pow(2, 53) + 1)) // true
console.log(Object.is(BigInt(Math.pow(2, 53)), BigInt(Math.pow(2, 53)) + BigInt(1))) // false