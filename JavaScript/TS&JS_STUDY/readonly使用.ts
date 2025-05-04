class Person {
    readonly name: string
    constructor(name: string) {
        this.name = name
    }
    say() {
        console.log(`我的名字叫${this.name}`)
    }
    updateName() {
        // this.name = '章三' // 报错
    }
}
let person = new Person("小可爱")
// person.name = "大可爱" // 报错
console.log("person => ", person)

class Person2 {
    constructor(readonly name: string = '大可爱') {
        // this.name = name // 可以省略
    }
}
let person2 = new Person2("小可爱")
console.log("person2 => ", person2)
console.log("person2.name => ", person2.name)