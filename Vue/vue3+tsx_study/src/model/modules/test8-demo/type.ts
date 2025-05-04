export  interface DfWriterConfig{
    IOptions: {
        /** 模版名字 */
        demoName:string
        /**调用模版数据 */
        getList:()=>Promise<any>
        /**模版可读还是可标记 */
        demoModel:string,
        /**保存模版 */
        saveDemo:(keyArr:Record<string,any>)=>Promise<any>
    }
    /** 定义第三个回调函数传参类型 */
    ICallBackParam: {
        type: "click",
        data:any
    },
    /** 定义向外暴露哪些方法 */
    IControl: {
        /**打开病例模版 */
        open:()=>void,
        /**获取数据 */
        getData():void
        /**填充数据 */
        fillData():void
        /**打印模版 */
        PrintDocument():void
        /**预览模版 */
        LoadPrintPreview():void
        /**关闭预览 */
        ClosePrintPreview():void
    };

}