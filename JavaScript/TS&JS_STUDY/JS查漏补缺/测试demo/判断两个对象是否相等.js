// let obj1 = {
//     name: "小猪课堂",
//     age: 26,
//     sex: "不知道"
// }
// let obj2 = {
//     name: "小猪课堂",
//     age: 26,
//     sex: "不知道"
// }
// console.info("通过===比较两个对象", obj1 === obj2); // false



// console.log("---------------------------------------")

// let obj3 = obj1;
// console.info("通过===比较两个对象", obj1 === obj3); // true



function isEqual(obj1, obj2) {
    // 1. 判断两个变量是否为对象类型
    if (!(Object.prototype.toString.call(obj1) === '[object Object]' && Object.prototype.toString.call(obj2))) {
        return false;
    }
    // 2. 判断两个对象的长度是否相等，不相等则直接返回 false
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    // 3. 判断两个对象的属性值是否相等
    for (const key in obj1) {
        // 判断两个对象的键是否相等
        if (obj2.hasOwnProperty.call(obj2, key)) {
            let obj1ValueType = Object.prototype.toString.call(obj1[key])
            let obj2ValueType = Object.prototype.toString.call(obj2[key])
            // 如果值是对象则递归
            if (obj1ValueType === '[object Object]' || obj2ValueType === '[object Object]') {
                if (!isEqual(obj1[key], obj2[key])) {
                    return false;
                }
            } else if (obj1[key] !== obj2[key]) {
                // 如果不是对象，则判断值是否相等
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

console.log("---------------------------------------")

// 测试用例-1
let obj1 = {
    name: "小猪课堂",
    age: 26,
    sex: "不知道"
}
let obj2 = {
    name: "小猪课堂",
    age: 26,
    sex: "不知道"
}
console.info("obj1 === obj2", isEqual(obj1, obj2)); // true


// 测试用例-2
let obj3 = {
    name: "小猪课堂",
    age: 26,
    sex: "不知道"
}
let obj4 = obj3;
console.info("obj3 === obj4", isEqual(obj3, obj4)); // true


obj4.num = 100;
console.log("obj3 => ", obj3)
console.log("obj4 => ", obj4)
console.info("obj3 === obj4", isEqual(obj3, obj4)); // true


// 测试用例-3
let obj5 = {
    name: "小猪课堂",
    age: 26,
    sex: {
        type: 1
    }
}
let obj6 = {
    name: "小猪课堂",
    age: 26,
    sex: {
        type: 1
    }
}
console.info("obj5 === obj6", isEqual(obj5, obj6)); // true


console.log("Start")

        process.nextTick(() => console.log('Microtask from process.nextTick'));
        
        console.log('End');
