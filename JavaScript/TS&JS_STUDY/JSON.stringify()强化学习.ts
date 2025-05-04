// 1. 对象转字符串
const obj = {
    name: "小方",
    age: 18
}

console.log("obj.toString() => ", obj.toString())
console.log("JSON.stringniy() => ", JSON.stringify(obj));


// 2.第二个参数（Array）
console.log(JSON.stringify(obj, ['name'])) // {"name":"小方"}
console.log(JSON.stringify(obj, ['name', 'age'])) // {"name":"小方","age":18}
console.log(JSON.stringify(obj, ['name', 'age', 'sex'])) // {"name":"小方","age":18}

// 3.第二个参数（Function）
console.log(JSON.stringify(obj, (key, value) => key === 'name' ? value : undefined))

// 4.第三个参数作为数字(是一个数字，字符串化的每个级别将相应缩进。)
console.log(JSON.stringify(obj, null, 2)) 
// {
//   "name": "小方",
//   "age": 18
// }
console.log(JSON.stringify(obj, null, 4)) 
// {
//     "name": "小方",
//     "age": 18
// }
console.log(JSON.stringify(obj, null, 10)) 
// {
//           "name": "小方",
//           "age": 18
// }



// 5.第三个参数作为字符串（替换空格字符）
console.log(JSON.stringify(obj, null, '--------'))
// {
// --------"name": "小方",
// --------"age": 18
// }


// 6.toJSON()方法
const superHero = {
    firstName: "San Shang",
    lastName: "You Ya",
    age: 18,
    toJSON() {
        return `fullName: ${this.firstName} ${this.lastName}`
    }
}
console.log(JSON.stringify(superHero)) // "fullName: San Shang You Ya"