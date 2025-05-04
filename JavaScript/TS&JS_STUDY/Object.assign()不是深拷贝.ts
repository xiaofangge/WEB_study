const obj = { 
    a: 1,
    b: {
        c: 2
    }
}
const obj2 = {
    d: 3
}
const mergeObj = Object.assign({}, obj, obj2)
console.info("mergeObj => ", mergeObj)

// 第二层属性是浅拷贝
const cloneObj = Object.assign({}, obj)
cloneObj.b.c = 3;
console.info("obj => ", obj)
console.info("cloneObj => ", cloneObj)

// 第一层属性是深拷贝
console.info("--------------------------------")
cloneObj.a = 10;
console.info("obj => ", obj)
console.info("cloneObj => ", cloneObj)


// 1、序列化以及反序列化实现第二层属性深拷贝
console.info("--------------------------------")
let deepCloneObj = JSON.parse(JSON.stringify(obj))
deepCloneObj.b.c = 10;
console.info("obj => ", obj)
console.info("deepCloneObj => ", deepCloneObj)

// 2、递归实现深拷贝（大型对象或深度嵌套的对象时可能会导致栈溢出）
console.info("--------------------------------")
// 深拷贝函数
const myDeepClone = (obj:any) => {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    const clonedObj:any = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = myDeepClone(obj[key])
        }
    }
    return clonedObj;
}
const deepClonedObj = myDeepClone(obj)
deepClonedObj.b.c = 100;
console.info("obj => ", obj)
console.info("deepClonedObj => ", deepClonedObj)

// 第一层属性：深拷贝，第二层属性：浅拷贝
console.info("--------------------------------")
let obj1 = {
    name: "iyongbao",
    score: {
        vue: 98
    }
}
let obj1Rest = {...obj1}
obj1Rest.name = "张三",
obj1Rest.score.vue = 70

console.info("obj1 => ", obj1)
console.info("obj1Rest => ", obj1Rest)


console.info("--------------------------------")
// slice 和 concat
// let objArr1 = ['iyongbao', score: {vue: 98}]
// let objArr2 = objArr1.slice()
// let objArr3 = objArr1.concat();

// objArr1[0] = "章三"
// objArr1[1].vue = 60
// console.info("objArr1 => ", objArr1)
// console.info("objArr2 => ", objArr2)
// console.info("objArr3 => ", objArr3)