// 1、创建一个对象，只设置部分属性，而保留其他属性的默认值
interface Person {
    name: string,
    age: number
}

type NewPerson = Partial<Person>

const user1: NewPerson = {}
const user2: NewPerson = {
    name: "小芳"
}
const user3: NewPerson = {
    age: 12
}
const user4: NewPerson = {
    name: "hello",
    age: 20,
}


// 2、在函数参数中使用部分属性对象，而不需要传递完整对象
interface User {
    id: number,
    name: string,
    age: number
}

function updateUser(user: Partial<User>): void {
    // 操作id
    if (user.id) {
        console.log("user.id => ", user.id)
    }
    if (user.name) {
        console.log("user.name => ", user.name)
    }
    if (user.age) {
        console.log("user.age => ", user.age)
    }
}

updateUser({ name: "大傻逼" })

console.log('---------------------------------------')
// 3、动态对象属性
function processObject(obj: Partial<{ [key: string]: number }>): void {
    for (const key in obj) {
        console.log(key, obj[key])
    }
}
const dynamicObj: Partial<{ [key: string]: number }> = {
    prop1: 10,
    prop2: 20
}
processObject(dynamicObj)



// 
console.log('---------------------------------------')
interface Student {
    name: string,
    age: number,
    address: {
        province: string,
        city: string,
        area: string
    }
}

type NewStudent = Partial<Student>
// 等同于
// type NewStudent = {
//     name?: string | undefined;
//     age?: number | undefined;
//     address?: {
//         province: string;
//         city: string;
//         area: string;
//     } | undefined;
// }


