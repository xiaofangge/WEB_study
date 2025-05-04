// 斐波那契数列
function fibonacci(n: number):number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}
// console.log(fibonacci(5)) // 5
// console.log(fibonacci(100)) // 卡住 报错: Maximum call stack size exceeded



// 尾递归的优化形式 
function tailRecursiveSum(x: number, running_total:number = 0):number {
    if (x <= 0) {
        return running_total;
    } else {
        // 尾递归：迭代形式
        return tailRecursiveSum(x-1, running_total+x)
    }
}
// console.log(tailRecursiveSum(5)); // 1+2+3+4+5 = 15
// console.log(tailRecursiveSum(1000)) // 500500



// 斐波那契数列（尾递归形式）
function tailFibonacci(n:number, c1:number=0, c2:number=1):number {
    if (n <= 0) {
        return c1;
    } else {
        // 尾递归：迭代形式
        return tailFibonacci(n-1, c2, c1+c2)
    }
}

// console.log(tailFibonacci(5)) // 5
// console.log(tailFibonacci(100)) // 354224848179262000000


// 非尾调用的递归
function nonTailRecursiveSum1(x:number,y:number):number {
    if (y > 0) {
        return nonTailRecursiveSum1(x+1,y-1)
    } else {
        return x;
    }
}
console.log(nonTailRecursiveSum1(1, 1000)) // RangeError: Maximum call stack size exceeded
// 尾调用的递归
function tailRecursiveSum1(x:number,y:number,total:number=0):number {
    if (y > 0) {
        return tailRecursiveSum1(x+1,y-1,total)
    } else {
        return total+x;
    }
}
console.log(tailRecursiveSum1(1, 10000)) // 1001
