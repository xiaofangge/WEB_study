// 毫秒级精度
console.log(Date.now()) // 1741172867090
console.log(new Date().getTime()) // 1741172867092


// 微秒级精度
console.log(performance.now())  // 103.38933396339417

// 获取高精度绝对时间
if (performance && performance.timeOrigin) {
    console.log("timeOrgin => ", performance.timeOrigin)
    const absoluteTIme = performance.timeOrigin + performance.now()
    console.log("高精度绝对时间 => ", absoluteTIme)
}