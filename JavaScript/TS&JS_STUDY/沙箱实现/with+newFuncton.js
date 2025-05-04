function createSandbox(code) {
    // 创建一个空对象，用作沙箱环境中的全局对象
    const sandbox = {}
    // 使用with语句将代码的作用域设置为这个空对象
    // 使用new Function创建一个新的函数，限制代码访问外部作用域，只能访问sandbox内的变量和函数
    const script = new Function("sandbox", `with(sandbox) { ${code} }`)
    // 执行这个函数，将sandbox作为参数传入
    return function () {
        script(sandbox)
    }
}

// 使用沙箱环境
const sandboxedScript = createSandbox(
    'console.log("Hello from the sandbox"); var x = 10;'
)
sandboxedScript(); // Hello from the sandbox
console.log(x); // ReferenceError: x is not defined