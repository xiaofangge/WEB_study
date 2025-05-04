export interface IPcmb {
   /** 模版id */
   MODEL_ID: string,
   /** 模版名称 */
   MODEL_NAME: string,
   /** 备注信息 */
   BZXX: string,
   /** 库房名称 */
   KF_MC: string,
   /** 删除标志 */
   DEL_FLAG: string,
   /** 创建人 */
   CJR: string,
   /** 创建人姓名 */
   CJR_XM: string,
   /** 最后更新人 */
   ZHGXR_XM: string,
   /** 库房id */
   KF_ID: string
    PINYIN:string
}

export interface IYpck {
    /** 库房id */
    DEPOT_ID: string,
    /** 拼音 */
    PINYIN: string,
    /** 仓位号 */
    CWH: string,
    /** 仓位类型名称 */
    CWLX_MC: string,
    /** 药品名称 */
    DRUG_NAME: string,
    /** 通用名称 */
    NAME_APPROVED: string,
    /** 规格 */
    DRUG_SPEC: string,
    /** 药品ID */
    DRUG_ID: string,
    /** 仓位类型ID */
    CW_LX: string,
    /** 产地 */
    CD_MC: string,
    /** 启用标识 0-否 1-是 */
    EFFECTIVE_FALG: string,
    /** 启用标识 */
    EFFECTIVE_NAME: string,
}

export interface IPcmbmx {
    /** 药品规格 */
    DRUG_SPEC: string,
    /** 启用标识 */
    EFFECTIVE_FALG: string,
    /** 启用标识 */
    EFFECTIVE_NAME: string,
    /** 模版id */
    MODEL_ID: string,
    /** 创建时间 */
    CJSJ: string,
    /** 床位号 */
    CWH: string,
    /** 最后更新人 */
    ZHGXR: string,
    /** 药品id */
    YP_ID: string,
    /** 产地id */
    CD_ID: string,
    /**产地名称 */
    CD_NAME?:string,
    /** 删除标志 */
    DEL_FLAG: string,
    /** 创建人 */
    CJR: string,
    /** 最后更新时间 */
    ZHGXSJ: string,
    /** 记录id */
    JL_ID: string,
    /** 仓位类型 */
    CW_LX: string
    YP_MC:string,
    /** 拼音码 */
    PINYIN: string,
    CD_MC:string
    CWLX_MC:string
    XH:string
}


export interface IPcmx {
    DIFFERENCE: string,
    MODEL_NAME: string
    MODEL_ID: string
    /** 创建人 */
    CREATE_EMPE: string,
    /** 拼音码 */
    PINYIN: string,
    /** 生产厂家ID */
    DRUG_AREA_ID: string,
    /** 最后更新时间 */
    UPDATE_DATE: string,
    /** 仓位号 */
    STOCK_NO: string,
    /** 生产厂家名称 */
    AREA_NAME: string,
    /** 批零系数 */
    FACTOR: number,
    /** 购入价 */
    STOCK_PRICE: number,
    /** 批号 */
    BATCH_NO: string,
    /** 药品名称 */
    DRUG_NAME: string,
    /** 零售价 */
    RETAIL_PRICE: number,
    /** 创建时间 */
    CREATE_DATE: string,
    /** 最后更新人 */
    UPDATE_EMPE: string,
    /** 盘存单号 */
    INVENTORY_NO: string,
    /** 盘存数量 */
    REAL_AMOUNT: string,
    /** 规格 */
    DRUG_SPEC: string,
    /** 数量 */
    AMOUNT: number,
    /** 批零系数对应单位id */
    FACTOR_UNIT_CODE: string,
    /** 药品ID */
    DRUG_ID: string,
    /** 批零系数对应单位名称 */
    FACTOR_UNIT_NAME: string
}
