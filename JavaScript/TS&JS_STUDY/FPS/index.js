// 预加载相关的东西
requestIdleCallback((deadline) => {
    console.log(deadline.timeRemaining())
})