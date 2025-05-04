// 空数组不检测
let newArr = [].filter(item => {
    console.log("空")
})
console.log(newArr)  // []


// some()
console.log("------------------------")
let arr1 = [1, 2, 3, 4, 5]
let hasVal2 = arr1.some(val => {
    console.log("hasVal2 val => ", val) // 1 2
    return val === 2
})
let hasVal6 = arr1.some(val => {
    console.log("hasVal6 val => ", val) // 1 2 3 4 5
    return val === 6
})
console.log("hasVal2 => ", hasVal2) // true
console.log("hasVal6 => ", hasVal6) // false


// every()
console.log("------------------------")
let flagArr : Number[] = [];
let everyFlag = arr1.every(val => {
    flagArr.push(val)
    return val + 2 < 5
})

console.log("flagArr => ", flagArr) // [1, 2, 3]
console.log("everyFlag => ", everyFlag) // false

let everyEmptyFlag = [].every(val => {
    console.log("空")
})
console.log("everyEmptyFlag => ", everyEmptyFlag) // true