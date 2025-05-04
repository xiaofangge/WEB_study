// ES6 之前 eval()
const blog = {
    name: 'js-ES6之前的元编程'
}
const authorKey = 'author'
const authorValue = 'fangruichuan'
testEval = () => eval(`blog.${authorKey} = '${authorValue}'`)
testEval()
console.log(blog) // { name: 'js-ES6之前的元编程', author: 'fangruichuan' }


// ES6 之前 自省
console.info("-----------------------------------------------")
const users = {
    'Tom': 20,
    'Jerry': 25,
    'Lily': 30
}
Object.keys(users).forEach(key => {
    console.log(`User ${key} is ${users[key]} years old.`)
})


// ES6 之前 自我修改
console.info("-----------------------------------------------")
const obj = {
    value: 12,
    addValue() {
        this.value += 10;
    }
}
obj.addValue()
console.log(obj.value) // 22


// ES6 之前 调解
console.info("-----------------------------------------------")
const student = {
    name: 'Tom',
}
Object.defineProperty(student, 'name', {
    value: 'Tom-2',
    writable: false,
    enumerable: false,
    configurable: false
})
student.name = 'jack'
console.log(student.name) // Tom-2



// ES6 之后 调解 Proxy
console.info("-----------------------------------------------")
// 1. 自定义对象行为
// 一、创建一个handler
const employee = {
    name: "kyle",
    age: 25
}
const handler = {
    get: function(target, key) {
        if (Object.is(key, "info")) {
            return `Name: ${target.name}, Age: ${target.age}`;
        }
        return Reflect.get(target, key)
    }
}
// 二、创建Proxy对象
const empProxy = new Proxy(employee, handler);
// 三、访问Proxy对象属性
console.info(empProxy.info); // "Name: kyle, Age: 25"
console.info(empProxy.name); // "kyle"
console.info(empProxy.age); // 25
console.info(empProxy.salary); // undefined
