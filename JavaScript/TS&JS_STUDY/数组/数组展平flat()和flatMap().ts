const arr = [[1, 2], [3, 4], 5]
console.log(arr.flat()) // [ 1, 2, 3, 4, 5 ]

// flat()也会移除数组中的空项
const arr2 = [[1, 2], 5, , , [3, 4]]
console.log(arr2.flat()) // [ 1, 2, 5, 3, 4 ]


const arrVeryDeep = [[1, [2, [3, 4, [5, 6, [7, 8, [9, [10]]]]]]], 1]
console.log(arrVeryDeep.flat(Infinity)) // [1, 2, 3, 4,  5,6, 7, 8, 9, 10,1]
console.log(arrVeryDeep.flat()) // [ 1, [ 2, [ 3, 4, [Array] ] ], 1 ]   出错



// flatMap()
const userRunning1 = {
    movements: [1000, 4500, 500, 1200]
}
const userRunning2 = {
    movements: [2000, 4500, 2500, 12000]
}
const userRunning3 = {
    movements: [10000, 5000, 1500, 800]
}
const allRunning = [userRunning1, userRunning2, userRunning3]

const totalDistance = allRunning.map(item => item.movements).flat().reduce((acc, mov) => acc + mov, 0)
console.log("flat totalDistance => ", totalDistance) // 45500
const totalDistance2 = allRunning.flatMap(item => item.movements).reduce((acc, mov) => acc + mov, 0)
console.log("flatMap totalDistance2 => ", totalDistance2) // 45500