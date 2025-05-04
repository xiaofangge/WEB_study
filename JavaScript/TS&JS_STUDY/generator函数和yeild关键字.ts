// Generator函数 *必填
function* firGenerator() {
    yield 1;
    yield 2;
}

const fir = firGenerator()

console.info(fir.next())    // { value: 1, done: false }
console.info(fir.next())    // { value: 2, done: false }
console.info(fir.next())    // { value: undefined, done: true } done为true，视为迭代完成


console.info("--------------------")
// const obj = {}
// obj[Symbol.iterator] = function* () {
//     yield 1, yield 2;
// }
// console.info(obj)

function* gen(): Generator<number, void, unknown> {
    console.log("hi " + (yield 1))
}
const g = gen()
console.info(g.next())
console.info(g.next())
// { value: 1, done: false }
// hi undefined
// { value: undefined, done: true }


console.info("--------------------")
// yield 表达式的返回值 undefined
function* gen2(): Generator<number, void, unknown> {
    const a : unknown = yield 2;
    yield a as number * 3;
}
const g2 = gen2()
console.info(g2.next()) // { value: 2, done: false }
// console.info(g2.next()) // { value: NaN, done: false }
console.info(g2.next(5)) // { value: 15, done: false }

console.info("--------------------")
function* gen3() {
    yield "a";
    yield "b";
    yield "c";
}
function* gen4() {
    yield 1;
    const result = yield* gen3()
    console.info("result => ", result)
    yield* "xy";
    yield 2;
}
for (let v of gen4()) {
    console.info(v)
}
// 1
// a
// b
// c
// result =>  undefined
// x
// y
// 2


console.info("-------------------------")
const gen5 = function* () {
    try {
        yield;
    } catch (e) {
        console.log("内部捕获 => ", e)
    }
}
const g5 = gen5()
g5.next()
try {
    throw("a")
    throw("b")
} catch (e) {
    console.log("外部捕获", e)
}