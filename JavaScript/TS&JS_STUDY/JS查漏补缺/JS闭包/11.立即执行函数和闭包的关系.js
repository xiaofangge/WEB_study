(function () {
    console.log("I'm a closure!")
})()

function fn() {
    console.log("I'm a function!")
}
fn()

console.log("-----------------------------")
// 立即执行函数和闭包的关系：
// 立即执行函数的执行会立即执行函数体，而函数体中包含的闭包会在立即执行函数执行完毕后执行
// 立即函数可以让闭包的实现少写一些代码

// 不用立即函数
function sayName() {
    const name = 'Tom'
    return function() {
        console.log(name)
    }
}
const say = sayName()
say() // output: Tom

// 用立即函数
const sayIIFE = (function() {
    const name = 'Tom'
    return function() {
        console.log(name)
    }
})()
sayIIFE() // output: Tom