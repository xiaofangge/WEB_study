const animal = {
    makeSound: function () {
        console.log("Some generic animal sound")
    }
}

const dog = Object.create(animal)
dog.bark = function () {
    console.log("Woof!")
}
dog.makeSound()
dog.bark()



// 原型链和继承
console.log("================================")
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    console.log(`Hello, I'm ${this.name}`)
}
const alice = new Person("Alice")
alice.greet()

function Developer(name, language) {
    Person.call(this, name);
    this.language = language;
}
Developer.prototype = Object.create(Person.prototype)
Developer.prototype.constructor = Developer
Developer.prototype.code = function () {
    console.log(`${this.name} is coding in ${this.language}`)
}
const bob = new Developer("Bob", "JavaScript")
bob.greet();    // Hello, I'm Bob
bob.code();     // Bob is coding in JavaScript

console.log("================================")
bob.greet = () => {
    console.log("Hi, I'm a developer!")
}
bob.greet()