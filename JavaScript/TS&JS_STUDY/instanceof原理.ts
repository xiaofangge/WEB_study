// ES6写法
// class Parent {
//     constructor() {}
// }

// class Child extends Parent {
    
// }

// class Other {
//     constructor() {}
// }
// let child = new Child()

// ES5写法
function Parent() {}
function Child() {}
function Other() {}
Child.prototype = new (Parent as any)()
let child = new (Child as any)()

console.log("child instanceof Child => ", child instanceof Child)       // true
console.log("child instanceof Parent => ", child instanceof Parent)     // true
console.log("child instanceof Object => ", child instanceof Object)     // true
console.log("child instanceof Other => ", child instanceof Other)       // false


// 手写instanceof
function myInstanceof(left:any, right:any) {
    let leftVal = left.__proto__;
    let rightVal = right.prototype;
    while (true) {
        if (leftVal === null) return false;
        if (leftVal === rightVal) return true;
        leftVal = leftVal.__proto__;
    }
}


let a = {name: "小方"}
console.log(myInstanceof(a, Object)) // true
console.log(myInstanceof(8, Number)) // true
console.log(myInstanceof(8, String)) // false
console.log(myInstanceof(Symbol("foo"), Symbol)) // true
console.log(myInstanceof("", String)) // true
console.log(myInstanceof(true, Boolean)) // true
// console.log(myInstanceof(undefined, "undefined")) // 报错