// 配置全局的基础配置
// baseURL、timeout、header、responseType、withCredentitals
import axios from "axios";
// base64
import { Base64 } from 'js-base64'
// 配置中心
import globalConfig from './global.config';
import router from "./router";
let request = axios.create({
    // 1. 基础配置
    baseURL: "http://localhost:8000",
    timeout: 30 * 1000,
    responseType: "json",
    headers: {
        "a": "123"
    }
})

// 请求拦截器
request.interceptors.request.use((config) => {
    // token, 密钥的配置
    let whiteList = globalConfig.whilteListApi;
    let url = config.url ?? "";
    let token = localStorage.getItem('token')

    if (whiteList.indexOf(url)  === -1 && token) {
        config.headers.token = token;
    }

    // 密钥-secretId+特殊算法
    config.headers.secret = Base64.encode(globalConfig.secretId + new Date().toString()) 
    return config;
}, error => {
    return Promise.reject(new Error(error))
})

// 响应拦截器
request.interceptors.response.use((res) => {
    // 响应的统一处理
    const status = res.data.code || 200;
    const message = res.data.msg || '未知错误';
    if (status === 401) {
        alert("您没有权限")
        router.push("/about")
    } 
    if (status !== 200) {
        alert("错误码" + status + "  " + message)
        return Promise.reject(new Error(message))
    }
    return res;
}, error => {
    // 真实项目中，往往使用组件库的消息提示 message
    alert(axios)
    return Promise.reject(new Error(error))
})

export default request