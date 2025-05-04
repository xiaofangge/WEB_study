// 1. 递归
const arr = [1, [2, [3, [4, [5]]]]]
const flatten1 = (arr) => {
    let result = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = [...result, ...flatten1(element)]
        } else {
            result.push(element)
        }
    });
    return result;
}

console.info('递归：', flatten1(arr)) // [1, 2, 3, 4, 5]


// 2. reduce
const flatten2 = (arr) => {
    // pre: 用来返回最后累加的结果
    // cur: 用来遍历数组的每一项
    return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur)? flatten2(cur) : cur), [])
}

console.info('reduce：', flatten2(arr)) // [1, 2, 3, 4, 5]

// 3. 展开运算符
const flatten3 = (arr) => {
    while (arr.some(Array.isArray)) {
        arr = [].concat(...arr)
    }
    return arr;
}
console.log('展开运算符：', flatten3(arr)) // [1, 2, 3, 4, 5]


// 4. toString() + split()  有局限性
const flatten4 = (arr) => {
    return arr.toString().split(',').map(Number);
}
console.log('toString() + split()：', flatten4(arr)) // [1, 2, 3, 4, 5]

// 5. 栈 --- 递归的另一种
const flatten5 = (arr) => {
    let stack = [...arr];
    let result = [];
    while (stack.length) {
        let current = stack.pop();
        if (Array.isArray(current)) {
            stack.push(...current);
        } else {
            result.push(current);
        }
    }
    return result;
}
console.log('栈：', flatten5(arr)) // [1, 2, 3, 4, 5]


// 6. JSON.stringify() + JSON.parse() + 正则表达式  
const flatten6 = (arr) => {
    let str = JSON.stringify(arr).replace(/\[|\]/g, '')
    str = `[${str}]`
    return JSON.parse(str);
}
console.log('JSON.stringify() + JSON.parse() + 正则表达式：', flatten6(arr)) // [1, 2, 3, 4, 5]


// 7. ES6: Array.prototype.flat()
const flatten7 = (arr) => {
    // 第二个参数是数组的深度，Infinity表示全部展开
    return arr.flat(Infinity)
}
console.log('ES6: Array.prototype.flat()：', flatten7(arr)) // [1, 2, 3, 4, 5]