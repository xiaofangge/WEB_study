// 直接调用
var context = "outside";
function fun1() {
    var context = "inside";
    return eval("context");
}
console.log(fun1()); // "inside"


// 间接调用
console.info("----------间接调用----------")
var context2 = "outside";
function fun2() {
    var context2 = "inside";
    var geval = eval;
    // return geval("context2");

    // 下面也属于间接调用
    return eval.call(null, "context2")
}
// console.info(fun2()); // ReferenceError: context2 is not defined



// eval()生成动态代码
console.info("----------eval()生成动态代码----------")
function cal(fistOperand: number, operator: string, secondOperand: number) {
    return eval("fistOperand" + operator + "secondOperand")
}
console.log(cal(2, "+", 3)); // 5
console.log(cal(2, "-", 3)); // -1
console.log(cal(2, "*", 3)); // 6
console.log(cal(2, "/", 3)); // 0.6666666666666666  
console.log(cal(2, ">", 3)) // false


// Function构造函数：无法访问到当前闭包的局部变量，只能访问全局作用域
console.info("----------Function构造函数----------")
function calculate(fistOperand: number, operator: string, secondOperand: number) {
    const calFun = new Function('fistOperand', 'secondOperand', 'return fistOperand' + operator + 'secondOperand');
    return calFun(fistOperand, secondOperand);
}
console.log(calculate(2, "+", 3)); // 5
console.log(calculate(2, "-", 3)); // -1
console.log(calculate(2, ">", 5))  // false




