function Xinchao1() {
    let n = 1;
    function upNum() {
        console.log(++n)
    }
    return {
        upNum
    }
}

let xinchao = new Xinchao1();
xinchao.upNum(); // 2
xinchao.upNum(); // 3
xinchao.upNum(); // 4


// 构造函数中的作用域的使用形态
console.log("---------------------------")
function Xinchao2() {
    let n = 1;
    this.upNum = function() {
        console.log(++n)    
    }
}
let xinchao2 = new Xinchao2();
xinchao2.upNum(); // 2
xinchao2.upNum(); // 3
xinchao2.upNum(); // 4