export interface DrugSummary {
    /** 规格 */
    GG: string,
    /** 零售价 */
    LSJ: number,
    /** 单位名称 */
    DW_MC: string,
    /** 领用数量 */
    LYSL: number,
    /** 药品id */
    YP_ID: string,
    /** 产地id */
    CD_ID: string,
    /** 尾插 */
    WC: number,
    /** 发药数量 */
    FYSL: number,
    /** 期初库存 */
    QCKC: number,
    /** 生产厂家 */
    SCCJ: string,
    /** 期末库存 */
    QMKC: number,
    /** 采购入库 */
    RKSL: number,
    /** 采购退货 */
    THSL: number,
    /** 药房退库 */      
    TKSL: number,
    /** 出库数量  */
    CKSL: number,  
    /** 药品名称 */
    YP_MC: string,
    /** 损溢数量 */
    SYSL: number,
    /** 标准编码 */
    BZBM: string,
    /** 药品类型 */
    DRUG_TYPE: string,
    /** 仓位 */
    STOCK_NO: string,
}