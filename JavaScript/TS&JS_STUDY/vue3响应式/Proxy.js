const target = {
    name: "小方",
    age: 22
}

const handler = {
    get(target, key, receiver) {
        console.log(`获取对象属性${key}值`)
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        console.log(`设置对象属性${key}值`)
        return Reflect.set(target, key, value, receiver)
    },
    deeleteProperty(target, key) {
        console.log(`删除对象属性${key}`)
        return Reflect.deleteProperty(target, key)
    }
}

const proxy = new Proxy(target, handler)
console.log("proxy.age => ", proxy.age)
proxy.age = 21;
console.log("proxy.age => ", proxy.age)
console.log(delete proxy.age)
