// ==================== 柯里化函数 ========================
const getVolumn = (width) => {
    return (length) => {
        return (height) => {
            return width * length * height;
        }
    }
}

// 简化
const getVolumn2 = (width) => (length) => (height) => width * length * height;

// 长度和宽度不变的立方体
const cube = getVolumn2(5)(4);
console.log(cube(3)); // 60
console.log(cube(2)); // 40
console.log(cube(1)); // 20


console.log("----------------------------")

// ==================== 偏函数 ========================
const partial = function (fn, ...args) {  // args: [1, 2]
    return function (...otherArgs) {
        return fn(...args,...otherArgs);
    }
}

const getVolumn3 = (width, length, height) => width * length * height;
const cube2 = partial(getVolumn3, 1, 2);  // 宽固定为1，长固定为2，高在不断变化
console.log(cube2(3)); // 6
console.log(cube2(4)); // 8
console.log("----------------------------")
const cube3 = partial(getVolumn3, 2, 3);  // 宽固定为2，长固定为3，高在不断变化
console.log(cube3(4)); // 24
console.log(cube3(5)); // 30
