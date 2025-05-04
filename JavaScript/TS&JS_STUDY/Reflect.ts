let numbers = [1, 2, 3, 4, 5]
let max = Reflect.apply(Math.max, null, numbers);
console.log("max => ", max) // 5


// function MyConstructor() {
//     this.x = 10
// }

// let instance = Reflect.construct(MyConstructor, [])
// console.log("instance => ", instance)
// console.log(instance.x)

let obj = { x: 1, y: 2 }
console.log(Reflect.get(obj, 'x')) // 1

Reflect.set(obj, 'x', 10)
console.log(Reflect.get(obj, 'x')) // 10


// Vue3使用
function myReactive(target: any) {
    const handler = {
        get(target: any, key: string, receiver: any) {
            console.log(`获取了${key}`)
            return Reflect.get(target, key, receiver)
        },
        set(target: any, key: string, value: any, receiver: any) {
            console.log(`设置了 ${key}: ${value}`)
            return Reflect.set(target, key, value, receiver)
        }
    }
    return new Proxy(target, handler)
}

let obj1 = myReactive({ x: 1 })
console.log(obj1.x) // 获取了x \n 1
obj1.x = 2; // 设置了 x: 2