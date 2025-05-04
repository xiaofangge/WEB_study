// 1. 原型链继承
function Parent() {
    this.nums = [1, 2, 3];
}
function Child() {

}
Child.prototype = new Parent(); // 继承
const c1 = new Child(), c2 = new Child()
c1.nums.push(4)
console.log(c1.nums);       // [ 1, 2, 3, 4 ]
console.log(c2.nums)        // [ 1, 2, 3, 4 ]


console.log("----------------------")
// 2. 借用构造函数继承
function Parent2(name) {
    this.name = name;
}
function Child2(name) {
    Parent2.call(this, name)
}
const c3 = new Child2("TOM")
console.log(c3.name)



console.log("----------------------")
// 3. 组合构造函数和原型链继承
function Parent3(name) {
    this.name = name;
}
Parent3.prototype.say = function () {
    console.log(this.name)
} 
function Child3(name) {
    Parent3.call(this, name)
}
Child3.prototype = new Parent3()
const c4 = new Parent3("jack")
c4.say()


console.log("----------------------")
// 4. 原型继承
const parent = { nums: [1, 2, 3, 4] }
const child = Object.create(parent)
child.nums.push(5)
console.log(parent.nums)
console.log(child.nums)


// 5. 寄生组合式继承
function inherit(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);  // 继承方法
    Child.prototype.constructor = Child;
}
function Parent5(name) {
    this.name = name;
}
function Child5(name) {
    Parent5.call(this, name)
}
inherit(Child5, Parent5)


// 6. extends + super 继承
class Parent6 {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(this.name)
    }
}
class Son6 extends Parent6 {
    constructor(name) {
        super(name)
    }
}
const s = new Son6("John")
s.say()