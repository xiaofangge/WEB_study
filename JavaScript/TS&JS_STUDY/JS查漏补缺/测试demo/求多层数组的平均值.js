// 1. 用两个函数  平均值为：50 / 11
const arr = [1, 2, 3, [5, 8, 2, [2, 3, 5, 7]], 12]

function sum(arr) {
    let res = 0;
    for (const element of arr) {
        if (element instanceof Array) {
            res += sum(element);
        } else {    
            res += element;
        }
    }
    return res;
}

console.log("和为：", sum(arr))

function countCalc(arr) {
    let count = 0;
    for (const element of arr) {
        if (element instanceof Array) {
            count += countCalc(element);
        } else {
            count += 1
        }
    }
    return count
}
console.log("元素个数为：", countCalc(arr))

function avg(arr) {
    let res = 0;
    for (const element of arr) {
        if (element instanceof Array) {
            res += sum(element);
        } else {    
            res += element;
        }
    }
    return countCalc(arr) ? res / countCalc(arr) : 0;
}
console.log("平均值：", avg(arr))   // 4. 5445



// 2. 用一个函数  const arr = [1, 2, 3, [5, 8, 2, [2, 3, 5, 7]], 12]
// 递归展开法
function avg2(arr) {
    let sum = 0, count = 0;
    
    function flatten(element) {
        if (Array.isArray(element)) {
            element.forEach(flatten)
        } else if (typeof element === 'number' && !isNaN(element)) {
            sum += element;
            count++;
        }
    }

    flatten(arr)
    return count === 0 ? 0 : sum / count;
}
console.log("平均值avg2：", avg2(arr))


// 尾递归优化
function avg3(arr, sum = 0, count = 0) {
    if (!arr.length) {
        return count ? sum / count : 0
    }
    const [first, ...rest] = arr;
    if (Array.isArray(first)) {
        return avg3([...first, ...rest], sum, count)
    } else if (typeof first === 'number' && !isNaN(first)) {
        return avg3(rest, sum + first, count + 1)
    }
}
console.log("平均值avg3：", avg3(arr))