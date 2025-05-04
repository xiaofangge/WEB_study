import { Ref } from "vue";

export interface DfConfig {
    IOptions: {
        test1: Ref<any>,
        test2: string
    }
    /** 定义第三个回调函数传参类型 */
    ICallBackParam: {
        type: "change" | "click",
        data:any
    },
    /** 定义向外暴露哪些方法 */
    IControl: {
        getData:()=>any
    };
}