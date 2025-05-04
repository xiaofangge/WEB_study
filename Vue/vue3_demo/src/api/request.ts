import { AxiosRequestConfig } from "axios";
import request from "../axios";


let myRequest = (function () {
    // 使用闭包，利用缓存来记录一些接口
    let hasRequest: any[] = [];

    // 存缓存
    const mem = new Map();

    return function (config: AxiosRequestConfig) {
        let url = config.url;
        if (mem.has(url)) {
            return Promise.resolve(mem.get(url))
        } else  {
            if (hasRequest.indexOf(url) !== -1) {
                return Promise.reject({  mes: "请求已经提交" })
            }
            hasRequest.push(url)
            return request({
                ...config
            }).then((res) => {
                console.log("res => ", res)
                hasRequest = hasRequest.filter(item => {
                    if (item!== url) {
                        return item;
                    }
                })
                mem.set(url, res)
                return res;
            })
        }
    }
})()

export {
    request as initRequest, myRequest as request
};
