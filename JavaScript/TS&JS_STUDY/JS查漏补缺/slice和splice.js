// slice: 获取数组的子集 两个参数 截取结果 [start, end)
const arr = [1, 2, 3, 4, 5];
const subArr = arr.slice(1, 4); // [2, 3, 4]
console.log(subArr);

//              -4  -3 -2 -1
const arr2 = [1, 2, 3, 4, 5];
console.log(arr.slice(-3, -1))  // [3, 4]

const arr3 = [1, 2, 3]
const copyArr3 = arr3.slice()
console.log(copyArr3) // [1, 2, 3]


// 增删改操作splice: 修改数组的元素 三个参数 第一个参数是起始位置 第二个参数是删除的元素个数 第三个参数是要添加的元素（可以对数组进行增删改操作，并且不会修改数组长度）
const arr4 = ['apple', 'banana', 'orange']
arr4.splice(1, 1, 'grape')
console.log(arr4) // ['apple', 'grape', 'orange']


// 删除
const arr5 = ['apple', 'banana', 'orange']
arr5.splice(1)
console.log(arr5) // ['apple']

const arr6 = ['apple', 'banana', 'orange']
arr6.splice(1, 1)
console.log(arr6) // [ 'apple', 'orange' ]


// 插入
const arr7 = ['apple', 'banana', 'orange']
arr7.splice(1, 0, 'grape', 'lemon', 'watermelon')
console.log(arr7) // [ 'apple', 'grape', 'lemon', 'watermelon', 'banana', 'orange' ]


// 替换
const arr8 = ['apple', 'banana', 'orange']
arr8.splice(1, 2, 'grape', 'lemon', 'watermelon')
console.log(arr8) // [ 'apple', 'grape', 'lemon', 'watermelon' ]

// 返回值
const arr9 = ['apple', 'banana', 'orange', 'lemon']
const deletedArr = arr9.splice(1, 2)
console.log(deletedArr) // [ 'banana', 'orange' ]