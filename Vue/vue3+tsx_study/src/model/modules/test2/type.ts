export interface DfTest2Config {
    IOptions: {
        /** 名字 */
        name:string
    }
    /** 定义第三个回调函数传参类型 */
    ICallBackParam: {
        type: "click",
        data:any
    },
    /** 定义向外暴露哪些方法 */
    IControl: {
        getData:()=>any,
        getData2():any
    };
}