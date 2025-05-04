// 函数只执行一次
function once(fn: Function) : Function {
    let hasExecuted = false;
    let result: any;
    return function (this: Function, ...args: any[]) : any {
        if (!hasExecuted) {
            hasExecuted = true;
            result = fn.apply(this, args)
        }
        return result
    }
}

function myFunction() {
    console.log("11111111111")
}

const myFunctionOnce = once(myFunction)
myFunctionOnce();
myFunctionOnce();
myFunctionOnce();

console.log(('-----------------------------------------------'))
// 递归获取对象属性
const user = {
    info: {
        name: '张三',
        address: { home: "shanxi", compay: "alibaba" }
    }
}
//  obj 是获取属性的对象， path是路径， fallback 是默认值
function get(obj: Object, path: string, fallback?: any) : any {
    const parts = path.split('.') as string[];
    const key = parts.shift() as any;
    if (typeof obj[key] !== 'undefined') {
        return parts.length > 0 ? get(obj[key], parts.join('.'), fallback) : obj[key]
    }
    return fallback;
}

console.log(get(user, "info.name"))