import {request} from './request'


export const getList = (params?: any) => {
    return request({
        url: '/getlist',
        method: 'get',
        params: {
            ...params
        }
    })
}



// 不推荐

// let obj = {
//     getlist1: { url: '/getlist1', method: 'get' },
//     getlist2: { url: '/getlist2', method: 'get' },
//     getlist3: { url: '/getlist3', method: 'get' },
// }
// // api接口写成一个文件



// for (const [urlName, info] of Object.entries(obj)) {
//     request[urlName] = () => request({
//         url: info.url,
//         method: info.method
//     })
// }