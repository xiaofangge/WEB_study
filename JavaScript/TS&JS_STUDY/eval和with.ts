function foo(a: number) : void {
    var b = a * 2;
    function bar(c: number): void {
        console.log(a, b, c)
    }
    bar(b * 3)
}

foo(2) // 2 4 12


function foo2(str: string, a: number): void {
    eval(str);  // 欺骗！
    console.log(a, b) // 1 2
}
var b = 2;
foo2("var b = 3;", 1)


// with 通常被当做重复引用同一个对象中多个属性的快捷方式
var obj3 = {
    a: 1,
    b: 2,
    c: 3
}


// with (obj3) {
//     a = 3;
//     b = 4;
//     c = 5;
// }
