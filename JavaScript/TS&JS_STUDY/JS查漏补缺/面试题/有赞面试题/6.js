a = {
    b: {
        c() { 
            console.log(this); // { c: [Function: c] } this指向对象b的引用
        }
    }
};

a.b.c(); // 调用 c 方法