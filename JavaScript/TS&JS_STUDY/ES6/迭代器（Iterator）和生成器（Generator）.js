// 迭代器
function createIterator(items) {
    var i = 0;
    return {
        next: function() {
            var done = i >= items.length;
            var value = !done ? items[i++] : undefined;
            return {
                value: value,
                done: done
            }
        }
    }
}
var iterator = createIterator([1, 2, 3]);
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}    
console.log(iterator.next()); // {value: undefined, done: true} 
console.log(iterator.next()); // {value: undefined, done: true}


// 生成器
console.log("----------------------------------------")
function *createIterator2(items) {
    for (let i = 0, len = items.length; i < len; i++) {
        yield items[i];
    }
}
const iterator2 = createIterator2([1, 2, 3]);
console.log(iterator2.next());  // { value: 1, done: false }
console.log(iterator2.next());  // { value: 1, done: false }
console.log(iterator2.next());  // { value: 1, done: false }
console.log(iterator2.next());  // { value: undefined, done: true }
console.log(iterator2.next());  // { value: undefined, done: true }


// 访问默认迭代器 Symbol.iterator
console.log("----------------------------------------")
const arr = [1, 2, 3];
let iterator3 = arr[Symbol.iterator]();
console.info(iterator3.next());  // { value: 1, done: false }
console.info(iterator3.next());  // { value: 2, done: false }
console.info(iterator3.next());  // { value: 3, done: false }
console.info(iterator3.next());  // { value: undefined, done: true }


// 检测对象是否为可迭代对象
function isIterable(obj) {
    return typeof obj[Symbol.iterator] === 'function';
}


// 创建可迭代对象
console.log("----------------------------------------")
let obj = {
    a: 1,
    b: 2,
    c: 3,
    *[Symbol.iterator]() {
        let keys = Object.keys(this);
        for (let i = 0, len = keys.length; i < len; i++) {
            yield [keys[i], this[keys[i]]]
        }
    }
}
for (let iterator of obj) {
    console.info(iterator);
}
// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]


console.log("----------------------------------------")
// 内建迭代器
// 集合对象迭代器
// 字符串迭代器
let str = "abcdef";
for (let ch of str) {
    console.info(ch);
}


// 高级迭代器功能
// 给迭代器传递参数
console.log("----------------------------------------")
function *createIterator3() {
    let first = yield 1;
    let second = yield first + 2;
    return second + 3;
}
const iterator4 = createIterator3();
console.log(iterator4.next());  // { value: 1, done: false }
console.log(iterator4.next(10)); // { value: 12, done: false }
console.log(iterator4.next(20)); // { value: 23, done: true }
console.log(iterator4.next()); // { value: 33, done: true }


// 在迭代器中抛出错误
console.log("----------------------------------------")
function *createIterator5() {
    let first = yield 1;
    let second;
    try {
        second = yield first + 2;  // 10 + 2 = 12
    } catch {
        second = 20;
    }
    yield second + 3;
}
const iterator5 = createIterator5();
console.log(iterator5.next());  // { value: 1, done: false }
console.log(iterator5.next(10)); // { value: 12, done: false }
console.log(iterator5.throw(new Error("出错了"))); // { value: 23, done: false }
console.log(iterator5.next()); // { value: undefined, done: true }
console.log(iterator5.next()); // { value: undefined, done: true }

// 生成器返回语句
console.log("----------------------------------------")
function *createIterator6() {
    yield 1;
    return;
    yield 2;  // 不会执行   
    yield 3;  // 不会执行
}
const iterator6 = createIterator6();
console.log(iterator6.next());  // { value: 1, done: false }
console.log(iterator6.next());  // { value: undefined, done: true }
console.log(iterator6.next());  // { value: undefined, done: true }

// return 也可以指定返回值
function *createIterator7() {
    yield 1;
    return 10
}
const iterator7 = createIterator7();
console.log(iterator7.next());  // { value: 1, done: false }
console.log(iterator7.next());  // { value: 10, done: true }    
console.log(iterator7.next());  // { value: undefined, done: true }

// 委托生成器
console.log("----------------------------------------")
function *createNumberIterator() {
    yield 1;
    yield 2;
    return 3;
}
function *createColorIterator() {
    yield "blue"
    yield "red"
}
function *createCombinedIterator() {
    yield *createNumberIterator();
    yield *createColorIterator();
    yield true;
}
const combinedIterator = createCombinedIterator();
console.log(combinedIterator.next());  // { value: 1, done: false }
console.log(combinedIterator.next());  // { value: 2, done: false }
console.log(combinedIterator.next());  // { value: "blue", done: false }
console.log(combinedIterator.next());  // { value: "red", done: false }
console.log(combinedIterator.next());  // { value: true, done: false }
console.log(combinedIterator.next());  // { value: undefined, done: true }

// 异步任务执行
console.log("----------------------------------------")
function run(taskDef) {
    let task = taskDef();
    // 开始执行任务
    let result = task.next();
    function step() {
        if (!result.done) {
            if (result.value instanceof Promise) {
                result.value.then(value => {
                    result = task.next(value);
                    step();
                }).catch(reason => {
                    task.throw(reason);
                })
            } else {
                result = task.next(result.value);
                step();
            }
        }
    }
    step();
}
function fetchData(isError = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isError) {
                resolve("ok")
            } else {
                reject("error")
            }
        }, 2000)
    })
}
run(function *() {
    try {
        let msg1 = yield fetchData();
        console.log("msg1 => ", msg1); // msg1 =>  ok
        let msg2 = yield fetchData(true);
        console.log("msg2 => ", msg2);
        yield fetchData(true)
    } catch (err) {
        console.log("出错啦: ", err) // 出错啦:  error
    }
})