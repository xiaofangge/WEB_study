export interface DfTestConfig {
    IOptions: {
        /** 测试1 */
        test1: number,
        test2: string
    }
    /** 定义第三个回调函数传参类型 */
    ICallBackParam: {
        type: "click",
        data:any
    },
    /** 定义向外暴露哪些方法 */
    IControl: {
        getData:()=>any
    };
}