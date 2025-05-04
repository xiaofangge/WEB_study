// 1. 原型链继承
function Parent1() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
}

function Child1() {
    this.type = 'child2';
}

Child1.prototype = new Parent1();
console.log(new Child1())       // Parent1 { type: 'child2' }

let s1 = new Child1()
let s2 = new Child1()
s1.play.push(4);
console.log(s1.play)            // [ 1, 2, 3, 4 ]
console.log(s2.play)            // [ 1, 2, 3, 4 ]


console.log('----------------------------')
// 2. 构造函数继承（借助 call）
function Parent2() {
    this.name = 'parent2'
}
Parent2.prototype.getName = function () {
    return this.name;
}
function Child2() {
    Parent2.call(this)
    this.type = 'child2'
}
let child = new Child2()
console.log(child);
// console.log(child.getName()) // 报错


console.log('--------------------------')
// 3. 组合继承
function Parent3() {
    this.name = 'parent3'
    this.play = [1, 2, 3]
}
Parent3.prototype.getName = function () {
    return this.name;
}
function Child3() {
    Parent3.call(this)
    this.type = 'child3'
}
// 第一次调用 Parent3()
Child3.prototype = new Parent3()
// 手动挂上构造器，指向自己的构造函数
Child3.prototype.constructor = Child3
let s3 = new Child3()
let s4 = new Child3()
s3.play.push(4)
console.log(s3.play)  // [ 1, 2, 3, 4 ]
console.log(s4.play)  // [ 1, 2, 3 ]
console.info(s3.getName())  // parent3
console.info(s4.getName())  // parent3


console.log("--------------------------")
// 4. 原型式继承
let parent4 = {
    name: 'parent4',
    friends: ['p1', 'p2', 'p3'],
    getName: function () {
        return this.name;
    }
}
let person4 = Object.create(parent4)
person4.name = 'Tom';
person4.friends.push('jerry')

let person5 = Object.create(parent4)
person5.friends.push('lucy')

console.log(person4.name)           // Tom
console.log(person4.name === person4.getName()) // true
console.log(person5.name)           // parent4
console.log(person4.friends)        // [ 'p1', 'p2', 'p3', 'jerry', 'lucy' ]
console.log(person5.friends);       // [ 'p1', 'p2', 'p3', 'jerry', 'lucy' ]

// 5. 寄生式继承
console.log('----------------------------------')
let parent5 = {
    name: 'parent5',
    friends: ['p1', 'p2', 'p3'],
    getName: function () {
        return this.name;
    }
}
function clone(original) {
    let clone = Object.create(original)
    clone.getFriends = function () {
        return this.friends;
    }
    return clone;
}
let person6 = clone(parent5)
console.log(person6.getName())      // parent5
console.log(person6.getFriends())   // [ 'p1', 'p2', 'p3' ]

console.log("-------------------------")
// 6. 寄生组合式继承
function clone6(parent_, child_) {
    // 这里该用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child_.prototype = Object.create(parent_.prototype)
    child_.prototype.constructor = child_
}
function Parent6() {
    this.name = 'parent6'
    this.play = [1, 2, 3]
}
Parent6.prototype.getName = function () {
    return this.name;
}
function Child6() {
    Parent6.call(this)
    this.friends = 'child6'
}
clone6(Parent6, Child6);
Child6.prototype.getFriends = function () {
    return this.friends;
}
let child6 = new Child6()
console.log(child6)     // Child6 { name: 'parent6', play: [ 1, 2, 3 ], friends: 'child6' }
console.log(child6.getName())   // parent6
console.log(child6.getFriends()) // child6

console.log("-----------------------------")
// 7. ES6: extends
class Person {
    constructor(name) {
        this.name = name;
    }
    // 原型方法
    getName = function () {
        console.log('Person: ', this.name)
    }
}
class Gamer extends Person {
    constructor(name, age) {
        // 子类中存在构造函数
        super(name);
        this.age = age;
    }
}
const asuna = new Gamer('Asuna', 20)
asuna.getName()     // Person:  Asuna