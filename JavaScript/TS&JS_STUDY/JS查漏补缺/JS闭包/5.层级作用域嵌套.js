let arr1 = [];
for (let i = 1; i <= 3; i++) {
    arr1.push(() => i)
}
console.log(arr1[0]()); // 1
console.log(arr1[1]()); // 2
console.log(arr1[2]()); // 3


console.log("----------------------")
let arr2 = [];
for (var i = 1; i <= 3; i++) {
    arr2.push(() => i)
}
console.log(arr2[0]()) // 4
console.log(arr2[1]()) // 4
console.log(arr2[2]()) // 4

console.log("------------------")
let arr3 = [];
for (var i = 1; i <= 3; i++) {
    ((i) => arr3.push(() => i))(i)
}
console.log(arr3[0]()) // 1
console.log(arr3[1]()) // 2
console.log(arr3[2]()) // 3