// test1 子线程代码
// 通过监听message来接收主线程中的消息
addEventListener("message", function (res) {
    // 子线程向主线程中发生消息
    // 计算斐波那契数列,这个数列从第3项开始，每一项都等于前两项之和。
    if (res.data === "start") {
        // 开始运算
        console.log("收到主线程消息，开始运算")
        // 计算斐波那契数列,这个数列从第3项开始，每一项都等于前两项之和。
        function fibonaci(num) {
            if (num < 2) {
                return num;
            } else {
                return fibonaci(num-1) + fibonaci(num-2)
            }
        }
        console.time("运算时间: ")
        let count = fibonaci(40)
        console.timeEnd("运算时间: ")
        // 向主线程发送消息
        console.log("运算完毕，发送消息给主线程")
        this.postMessage(count)
    }
})