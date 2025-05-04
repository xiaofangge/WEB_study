for (var i = 1; i <= 3; i++) {
    console.log(`for里面：${i}`)
}
console.log(`for外面：${i}`) // 4


for (let j = 1; j <= 3; j++) {
    console.log(`for里面: ${j}`)
}
// console.log(`for外面: ${j}`) // ReferenceError: j is not defined


console.log("------------------------------")
for (var k = 1; k <= 3; k++) {
    setTimeout(() => {
        console.log(`var timeout for里面: ${k}`)    // 4 4 4
    }, 1000)
}

console.log("-------------------------------")
for (let l = 1; l <= 3; l++) {
    setTimeout(() => {
        console.log(`let timeout for里面: ${l}`)    // 1 2 3
    }, 1000)
}
