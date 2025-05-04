let a = {
    b: 3
};

function foo(obj) { // 对象引用传递：在函数中修改对象的属性会影响原对象
    obj.b = 4;  // 修改传入对象的属性
    return obj; // 返回这个对象
}

let aa = foo(a);  // 调用foo函数，传入对象a，并将返回值赋给aa 
console.log(a.b); // 输出 a.b 的值 4
console.log(aa.b); // 输出 aa.b 的值 4

aa = { b: 6 }; // 重新赋值aa，aa现在是一个新的对象，不再指向原对象
console.log(a.b); // 再次输出 a.b 的值 4
console.log(aa.b); // 输出新的 aa.b 的值 6