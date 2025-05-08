// 原始回调函数
function parentFunc(data, handler) {
    handler(data, (processedData, nextHandler) => {
        nextHandler(processedData, (finalResult) => {
            console.log("最终结果：", finalResult)
        })
    })
}


// 优化：Promise + async/await
// 第一步：将回调函数转换为 Promise
const promisifyHandler = (data) => {
    return new Promise((resolve, reject) => {
        handler(data, (processedData, nextHandler) => {
            // 继续包装内层回调
            const promisifyNextHandler = (input) => {
                return new Promise(innerResolve => {
                    nextHandler(input, finalResult => innerResolve(finalResult))
                })
            }
            resolve({ processedData, promisifyNextHandler })
        })
    })
}
// 第二步：重构父函数为 async/await 模式
async function optimizedParentFunc(data) {
    try {
        // 第一层异步操作
        const { processedData, promisifyHandler } = await promisifyHandler(data)
        // 第二层异步操作
        const finalResult = await promisifyHandler(processedData)

        return finalResult;
    } catch (err) {
        console.log("捕获错误: ", err)
    }
}

