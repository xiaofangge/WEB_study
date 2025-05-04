// 1、数组解构赋值
const colors = ['blue', 'red', 'blue']
const [firstColor, secondColor, thirdColor] = colors;
console.log("firstColor => ", firstColor);
console.log("secondColor => ", secondColor)
console.log("thirdColor => ", thirdColor)


console.info("-----------------------------")
const numbers = [1, 2, 3, 4, 5]
// 忽略第二个元素，且将剩余元素赋值给变量rest
const [firstNum, , thirdNum, ...rest] = numbers;
console.info("firstNum => ", firstNum)
console.info("thirdNum => ", thirdNum)
console.info("rest => ", rest)

const printFirstTwo = ([first, second]:number[]) => {
    console.log(`The first two elmemts are ${first} and ${second}`)
}
printFirstTwo(numbers)


console.info("-----------------------------")
// 2、对象解构赋值
const person = { username: "Alice", age: 25, city: "上海" }
const { username, age, city } = person;
console.log("username => ", username)
console.log("age => ", age)
console.info("city => ", city)

console.info("-----------------------------")
const { username: fullName, age: yeasOld, city: address } = person
console.log("username => ", fullName)
console.info("yeasOld => ", yeasOld)
console.info("address => ", address)

interface IPerson {
    username: string,
    age: number,
    city: string,
}

console.info("-----------------------------")
// 3、函数参数中的解构赋值
const printPersonInfo = ({ username, age, city }: IPerson) => {
    console.info(`我的名字是: ${username}, 今年${age}岁, 家在${city}!`)
}
printPersonInfo(person)

console.info("-----------------------------")
// 4、嵌套解构
const goodUser = {
    name: "心潮",
    age: 25,
    address: {
        city: "金华",
        zip: 123456
    }
}
// 使用别名 goodName goodCity
const { name: goodName, address: { city: goodCity } } = goodUser;
console.info("goodName => ", goodName)
console.info("goodCity => ", goodCity)