function foo() {
    console.log(typeof bar); // 第3行 bar尚未初始化  undefined
    console.log(typeof kkk); // 第4行 函数声明提升  function
    bar = 3;                 // 第5行
    function kkk() { }      // 第6行
}

console.log(typeof foo()); // 第8行  foo()函数没有返回语句，所以返回 undefined -> typeof undefined -> undefined