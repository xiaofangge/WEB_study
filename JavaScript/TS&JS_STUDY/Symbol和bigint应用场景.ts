// Symbol特性
// 1.唯一性
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log("id1 === id2 => ", id1 === id2); // false

// 2.隐藏性
console.info("-----------------------------------")
let id = Symbol('id');
let obj: any = {
    [id]: 'symbol'
}
for (let key in obj) {
    console.info(obj[key]); // undefined 
}


// 常用方法
// 1. Object.getOwnPropertySymbols()
let array = Object.getOwnPropertySymbols(obj);
console.info(array); // [ Symbol(id) ]
console.info(array[0]); // symbol


// 2.Symbol.for(): 全局注册并登记，使得相同参数注册的值symbol相等
console.info("------------------------------------")
let name1 = Symbol.for('name'); // 检测到未创建后新建
let name2 = Symbol.for('name'); // 检测到已创建后返回
console.log("name1 === name2 => ", name1 === name2); // true

// 3.Symbol.keyFor(): 通过Symbol对象获取到参数值
console.info("------------------------------------")
let student1 = Symbol.for('student');
let student2 = Symbol.for('student');
console.log("Symbol.keyFor(student1) => ", Symbol.keyFor(student1)); // student
console.log("Symbol.keyFor(student2) => ", Symbol.keyFor(student2)); // student



// BigInt
console.info("------------------------------------")
let bigInt = BigInt("9007199254740999")
console.info("bigInt => ", bigInt) // bigInt =>  9007199254740999n


// Synbol应用场景
// 1. 使用Symbol来作为对象属性名（key）
const PROP_NAME = Symbol();
const PROP_AGE = Symbol();
let myObj = {
    [PROP_NAME]: "一斤豆腐",
    age: 25
}
// myObj[PROP_AGE] = 25;

console.info(myObj[PROP_NAME]); // 一斤豆腐
// console.info(myObj[PROP_AGE]); // 25

console.info("JSON.stringify(myObj) => ", JSON.stringify(myObj))  // {"age":25}

// 使用新增的反射API
console.info("Reflect.ownKeys(myObj) => ", Reflect.ownKeys(myObj)) // [ "age", Symbol() ]


// 2. 使用Symbol来替代常量
const TYPE_AUDIO = Symbol()
const TYPE_VIDEO = Symbol()
const TYPE_IMAGE = Symbol()

function handleFileResource(resource: any) {
  switch(resource.type) {
    case TYPE_AUDIO:
      break
    case TYPE_VIDEO:
      break
    case TYPE_IMAGE:
      break
    default:
      throw new Error('Unknown type of resource')
  }
}


// 3. 使用Symbol定义类的私有属性/方法
console.info("----------------------------")
const PASSWORD = Symbol();
class Login {
    username: string;
    constructor(username: string, password: string) {
        this.username = username;
        this[PASSWORD] = password;
    }
    checkPassword(password: string) {
        return this[PASSWORD] === password;
    }
}
const login = new Login('admin', '123456');
console.log(login.checkPassword('123456')); // true