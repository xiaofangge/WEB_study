// 对象
const obj = {} // 赋值给变量

const arr = []
arr.push(obj) // 赋值给数组项

obj.data = {}   // 赋值给其他对象的属性

// 函数
// 函数可以通过字面量来创建
function fn () {}

// 函数可以赋值给变量，数组项，或其他对象的属性
const fn2 = function () {}

const arr2 = []
arr2.push(fn2)

const obj2 = {}
obj2.fn = fn2;

// 函数可以作为函数的入参和出参
function fn3 (callback) {
  callback()
}
fn3(() => console.log('hello'))


// 函数可以动态创建和分配属性
function fn4 () {}
fn4.name = 'fn4'
fn4.age = 18
console.log(fn4) //[Function: fn4] { age: 18 }


console.log("--------------------------")
// 函数唯一标识
const store = {
    nextId: 1,
    cache: {},
    add(fn) {
        console.log("fn.id => ", fn.id)
        if (!fn.id) {
            fn.id = store.nextId++
            this.cache[fn.id] = fn
        }
    }
}
const fun1 = function () {}
const fun2 = function () {}
store.add(fun1)
store.add(fun1)
store.add(fun2)
console.log(store.cache)  // { '1': [Function: fun1] { id: 1 }, '2': [Function: fun2] { id: 2 } }
// 这种写法可以用于管理事件发生后需要调用的回调函数集合，已经存在于集合中的函数就不要再存进去了，提高性能。


console.log("---------------------------------------------")
// 自记忆函数-- 计算素数
function isPrime(value) {
    if (!isPrime.cache) {
        // 给函数添加一个 cache 来存储计算结果
        isPrime.cache = {}
    }
    if (isPrime.cache[value] !== undefined) {
        console.log(`命中缓存${value}，直接返回${isPrime.cache[value]}`)
        return isPrime.cache[value]
    }
    let prime = value > 2;
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            prime = false;
            break;
        }
    }
    console.log(`缓存里没有${value}，结果${prime}存进去`)
    return isPrime.cache[value] = prime;  // 先执行 isPrime.cache[value] = prime， 然后执行 return isPrime.cache[value]
}
isPrime(3)
isPrime(4)
isPrime(5)
isPrime(10)
isPrime(10)
isPrime(5)