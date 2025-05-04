// 1.维护一个运行池，出一个进一个，控制运行池的大小
const urlList = new Array(1000).fill("https://juejin.cn/")

const pool = new Set();
const waitQueue = new Array<() => any>();
const request = (url: string) => {
    return new Promise((resolve, reject) => {
        // 最大并发数
        const isFull = pool.size >= 10;
        const fn = function fn() {
            const request = fetch(url)
            request.finally(() => {
                pool.delete(fn);
                const next = waitQueue.shift();
                next && pool.add(next);
                setTimeout(() => next?.())
            })
            request.then(resolve)
            request.catch(reject)
        }
        if (isFull) {
            waitQueue.push(fn)
        } else {
            pool.add(fn);
            fn();
        }
    })
}
// for (let [index, url] of urlList.entries()) {
//     request(url).then(res => {
//         console.log(`第${index+1}个请求完成`, res)
//     })
// }


// 2.使用Promise.all()也可以实现控制并发请求
const maxConcurrentNum = 10;    // 最大并发数
// 数组分快，chunk表示每批次数量，返回数组二维数组
const chunk = (arr: string[], chunkSize: number) : string[][] => {
    const res: string[][] = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
        res.push(arr.slice(i, i + chunkSize));
    }
    return res;
}
// 异步请求方法
function fetchUrl(url: string) {
    return new Promise((resolve, reject) => {
        fetch(url)
           .then(res => resolve(res))
           .catch(err => reject(err))
    })
}
// 对url数组进行分块处理
const chunkedUrlList: string[][] = chunk(urlList, maxConcurrentNum);
// (async function () {
//     try {
//         for (let chunk of chunkedUrlList) {
//             const promises = chunk.map(url => fetchUrl(url));
//             // 等待所有promises完成执行，并将结果存入results数组中
//             const results = await Promise.all(promises);
//             console.log("results => ", results);
//         }
//     } catch (error) {
//         console.error("error => ", error)
//     }
// })();


// 3.使用Promise.race()也可以实现控制并发请求
// const promiseList: any[] = [];
// for (let url of urlList) {
//     const promise = fetchUrl(url);
//     promiseList.push(promise);
// }
// Promise.race(promiseList)
//     .then(res => console.log("res => ", res))
//     .catch(err => console.error("err => ", err))



// 4.使用async/await也可以实现控制并发请求
async function getData() {
    const promiseList: any[] = urlList.map(url => fetchUrl(url));
    const responses = await Promise.all(promiseList);
    responses.forEach((res, index) => {
        console.log(`第${index+1}个请求完成`, res)
    })
}
// getData().catch(err => console.error("err => ", err))  // err =>  TypeError: fetch failed


// 5.手动控制计数器
// 在循环中，当计数器达到最大并发请求数时，将其用于等待请求完成，然后递增计数器以允许下一个请求
function getDataList() {
    const limit = 10; // 最大控制并发数
    let counter = 0; // 请求计数器
    const getDataPromise = (dataUrl: string) => {
        return new Promise((resolve, reject) => {
            fetch(dataUrl)
            .then(res => {
                counter--;
                resolve(res)
            })
            .catch(err => {
                counter--;
                reject(err)
             })
        })
    }

    const getDataPromiseList = urlList.map(url => {
        if (counter < limit) {
            counter++;
            return getDataPromise(url)
        } else {
            return new Promise((resolve, reject) => {
                const interval = setInterval(() => {
                    if (counter < limit) {
                        counter++;
                        clearInterval(interval);
                        resolve(getDataPromise(url))
                    }
                }, 100)
            })
        }
    })

    Promise.all(getDataPromiseList)
       .then(responses => {
            for (let [index, response] of responses.entries()) {
                console.log(`第${index+1}个请求完成`, response)
            }
       })
       .catch(err => console.error("err => ", err))
}

getDataList();
