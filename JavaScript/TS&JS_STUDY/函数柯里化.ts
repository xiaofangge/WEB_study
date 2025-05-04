// 高阶函数
// 1.接收函数作为参数
function operateOnArray(array:any[], operation:any):any[] {
    return array.map(operation);
}
const numbers = [1, 2, 3, 4, 5];
const square = (num: number) => num * num;
const result = operateOnArray(numbers, square);
console.log(result); // [1, 4, 9, 16, 25]

// 2.返回函数（闭包）
console.info("----------------------------------------")
function multiplyBy(factor: number) {
    return function(num: number) {
        const result = num * factor;
        console.info(`The result of num【${num}】 * factor:【${factor}】 is 【${result}】`);
        return result
    }
}
const multiplyBy2 = multiplyBy(2);
console.log(multiplyBy2(5)); // 10


// 3.函数组合
console.info("----------------------------------------")
function compose(f:Function, g:Function) {
    return function(x:number) {
        return f(g(x));
    }
}
function double(x:number) {
    return x * 2;
}
function mutiply(x:number) {
    return x * x;
}
const doubleThenMutiply = compose(square, double);
console.log(doubleThenMutiply(5)); // 先翻倍再平方 （5 * 2）* 10 = 100

// 4.回调函数
console.info("----------------------------------------")
// function fetchData(callback:Function) {
//     // 模拟异步操作
//     setTimeout(() => {
//         const data = [1,2,3,4,5]
//         callback(data)
//     }, 1000)
// }
// fetchData((data: any) => {
//     console.log(data)
// })

// 5.函数柯里化
console.info("----------------------------------------")
function curry(fn:Function) {
    return function curried(...args:any[]) {
        console.info(`args.length: ${args.length}, fn.length: ${fn.length}`);
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...moreArgs:any[]) {
                return curried(...args, ...moreArgs);
            }
        }
    }
}
function add(a:number, b:number, c:number) {
    return a + b + c;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6


// 柯里化：单一职责原则
console.info("----------------------------------------")
function result2(num1:number) {
    num1 = num1 + 2;
    return function (num2:number) {
        num2 = num2 * 2;
        return function (num3:number) {
            num3 = num3 * num3
            console.log(`num1: ${num1}, num2: ${num2}, num3: ${num3}`);
            return num1 + num2 + num3;
        }
    }
}
console.info(result2(1)(2)(3)) // 3 + 4 + 9 = 16

// 柯里化：逻辑复用
console.info("----------------------------------------")
function add5(num1:number) {
    return function (num2:number) {
        console.info(`num1: ${num1}, num2: ${num2}`)
        return num1 + num2;
    }
}
console.log(add5(5)(10)); // 15
