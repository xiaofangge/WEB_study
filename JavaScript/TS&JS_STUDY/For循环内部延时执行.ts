// for (let i = 0; i < 6; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }

// console.log("---------------------")
// for (let i = 0; i < 6; i++) {
//     (function (i_, data) {
//         setTimeout(() => {
//             console.log(`这是第${i_}次, 这是其他参数：${data}`)
//         }, 1000 * i_) // 每隔1秒
//     })(i, "延时")
// }



for (let i = 0; i < 6; i++) {
    setTimeout(fn(i), 1000 * i)
}
function fn(i_: number) {
    return function () {
        console.log(`这是第${i_}次`)
    } 
}



