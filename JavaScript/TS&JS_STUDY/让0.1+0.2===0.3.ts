// 设置一个误差范围，通常称为“机器精度”。对JavaScript来说，这个值通常是为2-52，在ES6中，提供了Number.EPSILON属性，而它的值就是2-52
function numberReplion(num1: number, num2: number) {
    return Math.abs(num1 - num2) < Number.EPSILON;
}

console.log("Number.EPSLION => ", Number.EPSILON)
console.log(numberReplion(0.1+0.2, 0.3))


// 转为整数在转为浮点数
console.info("--------------------------")
function numberCal(number1: number, number2: number, target: number) {
    let temp = number1 * 10 + number2 * 10;
    return temp / 10 === target;
}
console.log(numberCal(0.1, 0.2, 0.3))