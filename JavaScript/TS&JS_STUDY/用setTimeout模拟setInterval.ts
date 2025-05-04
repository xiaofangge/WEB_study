let startTime = Date.now()
let count = 0;
// 耗时任务
// setInterval(() => {
//     let i = 0;
//     while (i++ < 1000000000); // 假设的网络延迟
//     count++;
//     console.log(`现在时间: ${Date.now()}ms, 与原设定的间隔相差: ${Date.now() - (startTime + count * 1000)}ms`)
// }, 1000)

// 现在时间: 1709629494241ms, 与原设定的间隔相差: 492ms
// 现在时间: 1709629495270ms, 与原设定的间隔相差: 521ms
// 现在时间: 1709629496273ms, 与原设定的间隔相差: 524ms
// 现在时间: 1709629497235ms, 与原设定的间隔相差: 486ms
// 现在时间: 1709629498272ms, 与原设定的间隔相差: 523ms
// 现在时间: 1709629499239ms, 与原设定的间隔相差: 490ms 
// ......


// 用setTimeout模拟setInterval
let timer = null
function interval(func:Function, wait:number): void {
    let interv = function () {
        func.call(null)
        timer = setTimeout(interv, wait);
    }
    timer = setTimeout(interv, wait)
}

interval(function () {
    let i = 0;
    while (i++ < 1000000000); // 假设的网络延迟
    count++;
    console.log(`现在时间: ${Date.now()}ms, 与原设定的间隔相差: ${Date.now() - (startTime + count * 1000)}ms`)
}, 1000)
