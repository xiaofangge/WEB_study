import { getCurrentUrl, getUrlKey } from "@/core/utils"
import { isMicroEnv } from "@/core/micro/helpers";

let configJson: any = {}
const xhr = new XMLHttpRequest;
let url = import.meta.env.VITE_BUILD_IP + import.meta.env.VITE_BASE_URL + "config.json"
if (import.meta.env.MODE === "development") {
    if (isMicroEnv) {

        let configIp = "localhost";
        const child_ip = getUrlKey('child_ip')
        if (child_ip) {
            configIp = child_ip
        }

        url = `http://${configIp}:${import.meta.env.VITE_BASE_PORT}${import.meta.env.VITE_BASE_URL}config.json`;
    } else {
        url = `./config.json`;
    }
}

xhr.open('get', url, false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
            let res = JSON.parse(xhr.responseText)
            if (res.code === 1) {
                configJson = res.data

                if (import.meta.env.MODE === "development") {
                    // 读取跟目录下的文件
                    let ajaxBaseFile = import.meta.glob('/ajaxBase.ts', { eager: true })
                    if (ajaxBaseFile) {
                        let fileBaseUrl = Object.values(ajaxBaseFile)[0] as any
                        if(fileBaseUrl && fileBaseUrl.LdAjaxBaseUrl){
                            configJson.LD_HSZ_VITE_BASE_URL.value = fileBaseUrl.LdAjaxBaseUrl
                        }
                    }
                }
            }
        }
    }
}
xhr.send()

/** 从public/config.js中获取 */
/** 接口前缀 */
export const BASE_URL = configJson.LD_HSZ_VITE_BASE_URL.value as string ?? getCurrentUrl();

/** 获取public中config.json所有的配置信息 */
export const PublicConfigJson = configJson;

/** 环境类型 */
export const ENV_TYPE: "development" | "production" | "single" = import.meta.env.MODE as any;

/** 不读取 */
/** 是否是调试环境 */
export const IS_DEV = ENV_TYPE === "development" ? true : false;
/** 是否显示layout */
export const SHOW_LAYOUT = ((ENV_TYPE !== "development" && ENV_TYPE !== "single") || isMicroEnv) ? false : true;
/** 接口最大延迟时间 */
export const AJAX_TIMEOUT = ENV_TYPE === "development" ? 2000 : 5000;
