// console.info(1 + '1' - 1)  // '11' - 1 = 11 - 1 = 10

function duplicate(array:number[]) {
  let initialLength = array.length;// 存储初始长度
  for (var i = 0; i < initialLength; i++) {
    array.push(array[i]);
  }
  return array;
}

const arr = [1, 2, 3];
const newArr = duplicate(arr);
console.log(newArr);  // 报错


console.info("----------------------------")
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHello() {
        console.info(`Hello, my name is ${this.name}`)
    }
}

// 创建实例
const person1 = new Person("Haider Wain")
const person2 = new Person("Omer Asif")
person1.sayHello()
person2.sayHello()


console.info("----------------------------")
const objValue = {
    valueOf: () => 42,
    toString: () => 27
}
console.info(objValue + "")  // 42
const objValue2 = {
    toString: () => 27
}
console.info(objValue2 + '') //27


// 对象键
// let a = {}
// let b = {key: 'test'}
// let c = {key: 'test'}
// a[b] = '123'
// a[c] = '456'
// console.info(a)