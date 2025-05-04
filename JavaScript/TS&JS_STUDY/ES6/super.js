const proto = {
    foo: "world"
}

const obj = {
    foo: "hello",
    find() {
        return super.foo;
    }
}

console.log("设置原型对象为proto前 => ", obj.find())
Object.setPrototypeOf(obj, proto)
console.log("设置原型对象为proto后 => ", obj.find())

const obj3 = {
    a: 1, 
    b: 2
}
console.log(Object.getOwnPropertySymbols(obj3))

console.log(Object.is(obj, obj3))