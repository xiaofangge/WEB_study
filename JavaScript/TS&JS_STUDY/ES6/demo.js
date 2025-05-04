const fun1 = (...rest) => {
    console.log("rest => ", rest)
}

fun1(1, 2, 3, 4, 5)

async function asyncFun() {}

console.log(Object.prototype.toString.call(asyncFun))
console.log(asyncFun.constructor instanceof AsyncFunction)

