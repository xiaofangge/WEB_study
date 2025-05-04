// 考虑数组
function clone(target: any) {
    if (typeof target === 'object') {
        let cloneTarget: any = Array.isArray(target) ? [] : {}
        for (const key in target) {
            cloneTarget[key] = clone(target[key])
        }
        return cloneTarget;
    } else {
        return target;
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
}
const cloneTarget = clone(target)
target.field4 = [1, 2, 3]
console.info("target => ", target)
console.log("cloneTarget => ", cloneTarget)


// 循环引用
console.info("-------------------------------------")
Object.assign(target, { target: target })
// const loopCloneTarget = clone(target)   // RangeError: Maximum call stack size exceeded 栈内存溢出
// 解决：使用map。
// 1.检查map中有无克隆对象。如果有，直接返回；
// 2.如果没有，将当前对象作为key，克隆对象作为value进行存储
// 3.继续克隆
function mapClone(target: any, map = new Map()) {
    if (typeof target === 'object') {
        const cloneTarget: any = Array.isArray(target) ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)
        for (const key in target) {
            cloneTarget[key] = mapClone(target[key], map)
        }
        return cloneTarget
    } else {
        return target;
    }
}
const loopCloneTarget = mapClone(target)
console.log("loopCloneTarget => ", loopCloneTarget)
// loopCloneTarget =>  <ref *1> {
//     field1: 1,
//     field2: undefined,
//     field3: { child: 'child' },
//     field4: [ 1, 2, 3 ],
//     target: [Circular *1]    Circular类型，即循环应用的意思
// }


// 使用weakMap 弱引用来优化
console.info("-------------------------------------")
function weakMapClone(target: any, map = new WeakMap()) {
    if (typeof target === 'object') {
        const cloneTarget: any = Array.isArray(target) ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)
        for (const key in target) {
            cloneTarget[key] = weakMapClone(target[key], map)
        }
        return cloneTarget
    } else {
        return target;
    }
}
const weakMapCloneTarget = mapClone(target)
console.log("weakMapCloneTarget => ", weakMapCloneTarget)


// for、while、for...in 执行效率对比            while > for > for...in
console.info("-------------------------------------")
const array = Array(10000000).fill(0)
let len = array.length
console.time("for 消耗")
let sum1 = 0;
for (let i = 0; i < len; i++) {
    sum1 += array[i]
}
console.timeEnd("for 消耗")  // 11.132ms

console.time("while 消耗")
let sum2 = 0, i = 0;
while (i < len) {
    sum2 += array[i++];
}
console.timeEnd("while 消耗") // 10.821ms

console.time("for...in 消耗")
let sum3 = 0;
for (let key in array) {
    sum3 += array[key];
}
console.timeEnd("for...in 消耗") //  1.062s



// 性能优化
// while 实现 forEach 遍历
console.info("-------------------------------------")
function myForEach(array: any[], iteratee: Function) {
    let index = -1;
    const length = array.length;
    while(++index < length) {
        iteratee(index, array[index])  // key-value
    }
    return array;
}
// 当遍历数组时，直接使用 forEach 进行遍历
// 当遍历对象时，使用Object.keys()取出所有的key进行遍历，然后在遍历时把 forEach 会调函数的value当作key使用
function betterWeakMapClone(target: any, map = new WeakMap()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target)
        let cloneTarget: any = isArray ? [] : {}
        if (map.has(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)

        const keys: any = isArray ? undefined : Object.keys(target)
        myForEach(keys || target, (key:any, value:any) => {
            if (keys) {
                key = value;
            }
            cloneTarget[key] = betterWeakMapClone(target[key], map)
        })
        return cloneTarget
    } else {
        return target
    }
}
const target2 = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
}
Object.assign(target2, { target2: target2 })
console.time("普通弱引用消耗")
const resultClone1 = weakMapClone(target2)
console.timeEnd("普通弱引用消耗")   // 普通弱引用消耗: 0.265ms

console.time("循环优化弱引用消耗")
const resultClone2 = betterWeakMapClone(target2)
console.timeEnd("循环优化弱引用消耗") // 循环优化弱引用消耗: 0.103ms



// 考虑其他数据类型
console.info("=============================================================================")
function isObject(target: any) {
    const type = typeof target;
    return target !== null && ['object', 'function'].includes(type)
}

function getType(target: any) {
    return Object.prototype.toString.call(target)
}

// 可继续遍历的类型
const deepTagList = ['[object Map]', '[object Set]', '[object Array]', '[object Object]']
function getInit(target: any) {
    const Ctor = target.constructor;
    return new Ctor()
}

function clone2(target: any, map = new WeakMap()) {
    // 克隆原始类型
    if (!isObject(target)) {
        return target;
    }
    // 初始化
    const type = getType(target)
    let cloneTarget : any;
    if (deepTagList.includes(type)) {
        cloneTarget = getInit(target)
    }
    // 防止循环引用
    if (map.get(target)) {
        return map.get(target)
    }
    map.set(target, cloneTarget)
    // 克隆Set
    if (type === '[object Set]') {
        target.forEach((value: any) => {
            cloneTarget.add(clone2(value, map))
        });
        return cloneTarget;
    }
    // 克隆Map
    if (type === '[object Map]') {
        target.forEach((value:any, key:any) => {
            cloneTarget.set(key, clone2(value, map))
        })
        return cloneTarget;
    }
    // 克隆对象和数组
    const keys = type === '[object Array]' ? undefined : Object.keys(target)
    myForEach(keys || target, (key:any, value:any) => {
        if (keys) {
            key = value
        }
        cloneTarget[key] = clone2(target[key], map)
    })
    return cloneTarget
}

const map = new Map();
map.set('Conardl','code秘密花园');
map.set("key", "value")
const set = new Set(["Conardl", "code秘密花园"])
const target3 = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set
}
const cloneTarget3 = clone2(target3)
console.log("可继续遍历 => ", cloneTarget3)


// 不可继续遍历雷姓
console.info("-------------------------------------------")
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';

function cloneReg(target: any) {
    const reFlags = /\w*$/
    const result = new target.constructor(target.source, reFlags.exec(target))
    result.lastIndex = target.lastIndex;
    return result;
}
function cloneSymbol(target:any) {
    return Object(Symbol.prototype.valueOf.call(target))
}

function cloneOtherType(target: any, type: string) {
    const Ctor = target.constructor;
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(target);
        case regexpTag:
            return cloneReg(target);
        case symbolTag:
            return cloneSymbol(target)
        default:
            return null;
    }
}

// 克隆函数
// const isFunc = typeof value === 'function'
function cloneFunction(func: Function) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString()
    if (func.prototype) {
        console.info("普通函数")
        const param = paramReg.exec(funcString)
        const body = bodyReg.exec(funcString)
        if (body) {
            console.info("匹配到函数体 => ", body[0])
            if (param) {
                const paramArr = param[0].split(',')
                console.info("匹配到参数 => ", paramArr)
                return new Function(...paramArr, body[0])
            } else {
                return new Function(body[0])
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString)
    }
}


const target4 = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    symbol: Object(Symbol(1)),
    date: new Date(),
    reg: /\d+/,
    error: new Error(),
    func1: () => {
        console.log('code秘密花园');
    },
    func2: function (a:number, b:number) {
        return a + b;
    }
};

// 最终
function clonelast(target: any, map = new WeakMap()) {
    // 克隆原始类型
    if (!isObject(target)) {
        return target;
    }
    // 根据不同类型进行操作
    const type = getType(target)
    let cloneTarget : any;
    if (deepTagList.includes(type)) {
        cloneTarget = getInit(target)
    } else {
        return cloneOtherType(target, type)
    }

    // 防止循环引用
    if (map.get(target)) {
        return map.get(target)
    }
    map.set(target, cloneTarget)

    // 克隆Set
    if (type === '[object Set]') {
        target.forEach((value: any) => {
            cloneTarget.add(clone2(value, map))
        });
        return cloneTarget;
    }
    // 克隆Map
    if (type === '[object Map]') {
        target.forEach((value:any, key:any) => {
            cloneTarget.set(key, clone2(value, map))
        })
        return cloneTarget;
    }
    // 克隆对象和数组
    const keys = type === '[object Array]' ? undefined : Object.keys(target)
    myForEach(keys || target, (key:any, value:any) => {
        if (keys) {
            key = value
        }
        cloneTarget[key] = clone2(target[key], map)
    })
    return cloneTarget
}

// const cloneTarget4 = clonelast(target4)
// console.log("克隆对象 => ", cloneTarget4)



class SysObjUtil {
    deepCloneObject = (initalObj:any, map = new WeakMap()) => {
        if(initalObj===null){
          return null;
        }
        const obj:any = {};

        // // 防止循环引用
        // if (map.get(initalObj)) {
        //     map.get(initalObj);
        // }
        // map.set(initalObj, obj)


        if (typeof initalObj !== 'object') {
          return initalObj;
        }
        for (const key in initalObj) {
          if(initalObj[key]===null){
            obj[key] = null;
          }else  if (typeof initalObj[key] === 'object') {
            // 对数组特殊处理
            if (Array.isArray(initalObj[key])) {
              // 用map方法返回新数组，将数组中的元素递归
              obj[key] = initalObj[key].map((item:any) => this.deepCloneObject(item));
            } else {
              // 递归返回新的对象
              obj[key] = this.deepCloneObject(initalObj[key]);
            }
          } else if (typeof initalObj[key] === 'function') {
            // 返回新函数
            obj[key] = initalObj[key].bind(obj);
          } else {
            // 基本类型直接返回
            obj[key] = initalObj[key];
          }
        }
        return obj;
      };
}
Object.assign(target4, { target4: target4 })
const cloneTarget4 = new SysObjUtil().deepCloneObject(target4)  // RangeError: Maximum call stack size exceeded
console.log("cloneTarget4 => ", cloneTarget4)
