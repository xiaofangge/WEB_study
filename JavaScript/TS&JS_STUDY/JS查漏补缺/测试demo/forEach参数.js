let arr1 = [1, 2, 3, 4]
let obj = {
    a: 1
}

arr1.forEach(function (self, index, arr) {
    console.log(`当前元素为${self}，索引为${index}，属于数组${arr}`)
    console.log("this => ", this)
    console.log(self + this.a)  
}, obj)


// 数组去重
console.log("--------------------------------")
let arr2 = [1, 2, 1, 3, 4, 1, 5, 4]
let arr3 = []
arr2.forEach((self, index, arr) => {
    arr.indexOf(self) === index && arr3.push(self)
})
console.log("arr3 => ", arr3) // [ 1, 2, 3, 4, 5 ]



// forEach 使用 return 无效
console.log("--------------------------------")
let arr4 = [1, 2, 3, 4]
const find = (arr, num) => {
    arr.forEach((self, index, arr) => {
        if (self === num) {
            return index;
        }
    })
}
// return 操作放在函数中，而不是forEach循环中
const find2 = (arr, num) => {
    let _index;
    arr.forEach((self, index, arr) => {
        if (self === num) {
            _index = index;
        }
    })
    return _index
}
console.log("find => ", find(arr4, 2)) // undefined
console.log("find => ", find2(arr4, 2)) // 1


console.log("----------------")
let arr = [1, 2];
arr.forEach((item, index) => {
  arr.splice(index, 1);
  console.log(1); //输出1次
});
console.log(arr); // [2]

arr = [1, 2];
[...arr].forEach((item, index) => {
    arr.splice(index, 1);
    console.log(1); //输出2次
});




// 数组遍历并删除自身
console.log("--------------------------------")
let arr5 = [1, 2, 1], i = 0, length = arr5.length;
for (; i < length; i++) {
    if (arr5[i] === 1) {
        arr5.splice(i, 1)
    }
}
console.log("arr5 => ", arr5)


arr5 = [1, 2, 1];
arr5.slice().reverse().forEach((item, index, array) => {
    if (item === 1) {
        arr5.splice(array.length - 1 - index, 1)
    }
})
console.log("arr5 => ", arr5)