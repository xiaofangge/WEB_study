// ES5

// 1. 累加累乘
const accumulation = (...vals) => vals.reduce((acc, val) => acc + val, 0);
const multiplication = (...vals) => vals.reduce((acc, val) => acc * val, 1);

console.log(accumulation(1, 2, 3, 4, 5)); // 15
console.log(multiplication(1, 2, 3, 4, 5)); // 120


// 2. 权重求和
console.log("-----------------------------------")
const scores = [
    { score: 90, subject: "chinese", weight: 0.5 },
    { score: 95, subject: "math", weight: 0.3 },
    { score: 85, subject: "english", weight: 0.2 }
]
const result = scores.reduce((acc, val) => acc + val.score * val.weight, 0);
console.log(result); // 90.5


// 3.代替reverse()
console.log("-----------------------------------")
const reverse = (arr = []) => arr.reduce((acc, val) => [val].concat(acc), []);
console.log(reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]


// 4.代替map()和filter()
console.log("-----------------------------------")
const arr = [0, 1, 2, 3];

console.log(arr.map(val => val * 2)) // [ 0, 2, 4, 6 ]
console.log(arr.reduce((acc, val) => [...acc, val * 2], [])) // [ 0, 2, 4, 6 ]

console.log(arr.filter(val => val > 1)) // [ 2, 3 ]
console.log(arr.reduce((acc, val) => acc.concat(val > 1 ? val : []), [])) // [ 2, 3 ]

console.log(arr.filter(val => val > 1).map(val => val * 2)) // [ 4, 6 ]
console.log(arr.reduce((acc, val) => acc.concat(val > 1 ? val * 2 : []), [])) // [ 4, 6 ]


// 5.代替some和every
console.log("------------------------------")
const scoreList = [
    { subject: 'chinese', score: 45 },
    { subject: 'Math', score: 90 },
    { subject: 'English', score: 60 }
]
// 代替some
console.log(scoreList.reduce((acc, val) => acc || val.score >= 60, false)) // true
// 代替every
console.log(scoreList.reduce((acc, val) => acc && val.score >= 60, false)) // false


// 6.数组分割
console.log("------------------------------")
const chunk = (arr = [], size = 1) => arr.length ?
    arr.reduce((acc, val) => (
        Object.is(acc[acc.length - 1].length, size) ?
        acc.push([val]) : acc[acc.length - 1].push(val), acc
    ), [[]])
    : []

console.log(chunk([1, 2, 3, 4, 5], 1))  // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
console.log(chunk([1, 2, 3, 4, 5], 2))  // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(chunk([1, 2, 3, 4, 5], 3))  // [ [ 1, 2, 3 ], [ 4, 5 ] ]
console.log(chunk([1, 2, 3, 4, 5], 4))  // [ [ 1, 2, 3, 4 ], [ 5 ] ]
console.log(chunk([1, 2, 3, 4, 5], 5))  // [ [ 1, 2, 3, 4, 5 ] ]
console.log(chunk([1, 2, 3, 4, 5], 6))  // [ [ 1, 2, 3, 4, 5 ] ]


// 7.数组过滤
console.log("------------------------------")
const difference = (arr = [], oarr = []) => arr.reduce((acc, val) => (!oarr.includes(val) && acc.push(val), acc), [])
console.log(difference([1, 2, 3, 4, 5], [2, 3, 6]))  // [ 1, 4, 5 ]


// 8.数组填充
console.log("------------------------------")
const fill = (arr = [], data = '', start = 0, count = 0) => {
    const end = arr.length - 1;
    if (start < 0 || start > end) return arr;
    return [
        ...arr.slice(0, start),
        ...arr.slice(start, start + count).reduce((acc, val) => (acc.push(data || val), acc), []),
        ...arr.slice(start, end + count)
    ]
}
const fillArr = [0, 1, 2, 3, 4, 5, 6];
console.log(fill(fillArr, 'aaa', 2, 3)) // [0,1,'aaa','aaa', 'aaa',2,3,4,5,6]


// 9.数组扁平
console.log("------------------------------")
const flat = (arr = []) => arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flat(val) : val)
}, [])
const flatArr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
console.log(flat(flatArr)) 

// 10.数组去重
console.log("------------------------------")
const unique = (arr = []) => arr.reduce((acc, val) => !acc.includes(val) ? [...acc, val] : acc , [])
console.log(unique([2, 1, 0, 3, 2, 1, 2])) // [ 2, 1, 0, 3 ]


// 11.数组最大最小值
console.log("------------------------------")
const max = (arr = []) => arr.reduce((acc, val) => Math.max(acc, val))
console.log(max([12, 45, 21, 65, 38, 76, 108, 43])) // 108
const min = (arr = []) => arr.reduce((acc, val) => Math.min(acc, val))
console.log(min([12, 45, 21, 65, 38, 76, 108, 43])) // 12


// 12.数组成员独立拆解
console.log("------------------------------")
const unzip = (arr = []) => arr.reduce(
    (acc, val) => (val.forEach((subVal, index) => acc[index].push(subVal)), acc),
    Array.from({ length: Math.max(...arr.map(val => val.length)) }).map(() => [])
)
const zipArr = [["a", 1, true], ["b", 2, false]];
console.log(unzip(zipArr)) // [ [ 'a', 'b' ], [ 1, 2 ], [ true, false ] ]


// 13.数组成员个数统计
console.log("------------------------------")
const count = (arr = []) => arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {})
console.log(count([1, 2, 3, 2, 1, 2])) // { '1': 2, '2': 3, '3': 1 }


// 14.数组成员位置记录
console.log("------------------------------")
const position = (arr = [], target) => arr.reduce((acc, val, i) => (Object.is(val, target) && acc.push(i), acc), [])
console.log(position([2, 1, 3, 2, 1, 2], 2)) // [ 0, 3, 5 ]


// 15.数组成员特性分组
console.log("------------------------------")
const group = (arr = [], key) => key ?
    arr.reduce((acc, val) => (!acc[val[key]] && (acc[val[key]] = []), acc[val[key]].push(val), acc), {})
    : {}
const groupArr = [
    { area: "GZ", name: "YZW", age: 22 },
    { area: "GZ", name: "TYJ", age: 20 },
    { area: "SZ", name: "AAA", age: 22 },
    { area: "FS", name: "BBB", age: 23 },
    { area: "SZ", name: "CCC", age: 20 }
]; 
console.log(group(groupArr, "area")) 
// {
// GZ: [
//     { area: 'GZ', name: 'YZW', age: 22 },
//     { area: 'GZ', name: 'TYJ', age: 20 }
// ],
// SZ: [
//     { area: 'SZ', name: 'AAA', age: 22 },
//     { area: 'SZ', name: 'CCC', age: 20 }
// ],
// FS: [ { area: 'FS', name: 'BBB', age: 23 } ]
// }
console.log("------------------------------")
console.log(group(groupArr, "age"))


// 16.字符串反转
console.log("------------------------------")
const reverseStr = (str = '') => str.split('').reduceRight((acc, val) => acc + val)
console.log(reverseStr('reduce真强')) // 强真ecuder


// 17.斐波那契数列
console.log("------------------------------")
const fibonacci = (len = 0) => {
    const arr = [...Array(len).keys()]
    return arr.reduce((acc, val, index) => (index > 1 && acc.push(acc[index - 1] + acc[index - 2]), acc), [0, 1])
}

console.log(fibonacci(10)) // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]


// 18.URL参数反序列化
console.log("------------------------------")
const parseUrlParam = (url = '') => {
    const params = url.split('?')[1]
    return params ? params.split('&').reduce((acc, val) => {
        const [key, value] = val.split('=')
        acc[key] = decodeURIComponent(value)
        return acc
    }, {}) : {}
}
console.log(parseUrlParam('https://www.baidu.com/s?wd=reduce&ie=utf-8')) // { wd: 'reduce', ie: 'utf-8' }


// 19.URL参数序列化
console.log("------------------------------")
const stringifyUrlParam = (obj = {}) => Object.entries(obj).reduce((acc, val) => {
    const [key, value] = val
    return `${acc}${key}=${encodeURIComponent(value)}&`
}, obj.length === 0 ?  "" : "?").slice(0, -1)
console.log(stringifyUrlParam({ wd: 'reduce', ie: 'utf-8' })) // 'wd=reduce&ie=utf-8'


// 20.返回对象指定键值
console.log("------------------------------")
const getKeys = (obj = {}, keys = []) => keys.reduce((acc, val) => (acc[val] = obj[val], acc), {})
console.log(getKeys({ a: 1, b: 2, c: 3 }, ['a', 'c'])) // { a: 1, c: 3 }


// 21.数组转对象
console.log("------------------------------")
const people = [
    { area: "GZ", name: "YZW", age: 27 },
    { area: "SZ", name: "TYJ", age: 25 }
];
const peopleObj = people.reduce((acc, val, index, arr) => {
    const { name, ...rest } = val
    acc[name] = rest
    return acc
}, {})
console.log(peopleObj) // { YZW: { area: 'GZ', name: 'YZW', age: 27 }, TYJ: { area: 'SZ', name: 'TYJ', age: 25 } }


// 22.功能性函数管道(函数组合)
console.log("------------------------------")
const double = val => val * 2;
const add = val => val + 1;
const pipe = (...funcs) => val => funcs.reduce((acc, func) => func(acc), val);

// ===
// const pipe = (...funcs) => {
//     return (val) => {
//         return reduce(funcs, (acc, func) => func(acc), val);
//     }
// }

console.log(pipe(double, add)(5)); // 5 * 2 + 1 = 11



console.log("------------------------------")
// 性能测试
const list = [...Array(10000000).keys()];

// map
console.time("map")
let sum3 = 0;
list.map(val => (sum3 += val, val))
console.log(sum3);
console.timeEnd("map")


// for
console.time('for');
let sum1 = 0;
for (let i = 0, len = list.length; i < len; i++) {
    sum1 += list[i];
}
console.log(sum1);
console.timeEnd('for');

// forEach
console.time('forEach');
let sum2 = 0;
list.forEach(val => {
    sum2 += val;
});
console.log(sum2);
console.timeEnd('forEach');

// reduce
console.time("reduce")
let sum4 = list.reduce((acc, val) => (acc += val, acc), 0)
console.log(sum4);
console.timeEnd("reduce")


