setTimeout(() => {
    console.log('111')              // 先过3秒输出
    setTimeout(() => {  
        console.log('222')          // 再过2秒输出
        setTimeout(() => {
            console.log('333')      // 再过1秒输出
        }, 1000)
    }, 2000)
}, 3000)