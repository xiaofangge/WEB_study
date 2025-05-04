class ParamError extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'ParamError'
    }
}

class HttpError extends Error {
    constructor(msg) {
        super(msg)
        this.name = 'HttpError'
    }
}

function ajax(url) {
    // 自定义错误处理
    if (!/^http/.test(url)) {
        throw new ParamError("请求地址格式错误")
    }
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url)
        xhr.send()
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(JSON.parse(this.response))
            } else if (this.status === 404) {
                // 自定义错误处理
                reject(new HttpError("响应内容不存在"))
            } else {
                reject("加载失败")
            }
        }
        xhr.onerror = function () {
            reject(this)
        }
    })
}