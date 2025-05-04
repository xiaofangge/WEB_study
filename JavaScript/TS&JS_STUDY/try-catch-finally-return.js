function example() {
    try {
        console.log("In try block");
        return "Return from try"; // 1. 会被执行
    } catch (error) {
        console.log("In catch block");
        return "Return from catch"; // 这个不会执行
    } finally {
        console.log("In finally block"); // 2. 一定会执行
        return "Return from finally"; // 3. 覆盖前面的 return
    }
}

console.log(example()); // 输出 "Return from finally"