const obj = {
    method: () => {
        console.log("111")
    }
}

const cloneObj = JSON.parse(JSON.stringify(obj))
console.log(cloneObj.method)


console.log("----------------------------")
const obj2 = {
    keys: undefined,
    key2: Symbol('foo'),
    key3: new Date()
}
const cloneObj2 = JSON.parse(JSON.stringify(obj2))
console.log(cloneObj2)
console.log(typeof cloneObj2.key3)


console.log("------------------------------")
const obj3 = {
    key1: NaN,
    key2: Infinity,
    key3: -Infinity
}
const cloneObj3 = JSON.parse(JSON.stringify(obj3))
console.log(cloneObj3)



// console.log("------------------------------")
// const obj4 = {

// }
// obj4.self = obj4
// const cloneObj4 = JSON.parse(JSON.stringify(obj4))
// console.log(cloneObj4)



console.log("------------------------------")
class MyClass {
    constructor() {
        this.value = 2;
    }

    method() {
        console.log("hello")
    }
}
const obj5 = new MyClass()
const cloneObj5 = JSON.parse(JSON.stringify(obj5))
console.log(cloneObj5)


console.log("--------------------")
const obj6 = {
    reg: /abc/,
    map: new Map([{a: 1}, {b:2}]),
    set: new Set([1, 2, 3])
}
const cloneObj6 = JSON.parse(JSON.stringify(obj6))
console.log(cloneObj6)

console.log("----------------")
const result = parseFloat((0.1 + 0.2).toFixed(1))
console.log(result === 0.3)
console.log(typeof result)

