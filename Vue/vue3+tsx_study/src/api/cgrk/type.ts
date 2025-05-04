export interface IOrderHead {
     /** 制单人用于前端展示 */
     FRONT_CREATE_EMPE_NAME?: string,
     /** 损益类型 1报益，2报损 */
     SY_FLAG?: string,
     /** 零库存导入标志 0否1是 */
     isZeroImport?: string,
     /** 当前单号 */
     orderNo: string;
     /** 保存生成的单据号 */
     INOUT_NO: string,
     /** 类型 
      * 1:采购入库 
      * 2:采购退货  
      * 3:库房间 入出库单与退药单 
      * 4:库房与科室 入出库单 
      * 5:科研经费 
      * 6:日常损益单 
      * 7:盘存损益
      * 8:药房请领 
      * 9:科室请领 
      * 10:调拨申请 
      * 11:调拨出入库 
      * 12 :大输液申领
     */
     INOUT_TYPE: string,
     /** 起始库房（或者部门id） 类型为1或12、15、16时为对应供货商id */
     OUTDEPOT_ID: string,
     /** 起始库房（或者部门名称） 类型为1或12、15、16时为对应供货商名称 */
     OUTDEPOT_NAME: string,
     /** 目标库房（或者部门id） 类型为1或12、14时为对应供货商id */
     INDEPOT_ID: string,
     /** 目标库房（或者部门名称） 类型为1或12、14时为对应供货商名称 */
     INDEPOT_NAME: string,
     /** 创建人 */
     CREATE_EMPE: string,
     /** 制单人id */
     MAKE_EMPE?: string,
     /** 申请单号 */
     APPLY_NO: string,
     /** 制单时间 */
     MAKE_DATE: string,
     /** 申请人id */
     APPLY_EMPE: string,
     /** 是否是快照单据 */
     SOURCE: "" | "1",
     /** 备注 */
     REMARK: string,
     /** 生成模式 */
     PLANTYPE: string,
     /** 单据药品类型 0 全部 1 西药 2 成药 3 中草药 */
     DRUG_TYPE: string[] | string,
     /** 购入总金额 */
     STOCK_TOTAL: number,
     /** 批发总金额 */
     // TRADE_TOTAL: number,
     /** 零售总金额 */
     RETAIL_TOTAL: number,
     /** 发票号 */
     INVOICE_NO:string,

     /** 起始时间（点击消耗量生成选项） */
     startTime?: string,
     /** 结束时间（点击消耗量生成选项） */
     endTime?: string,
     /** 剂型是包含模式还是排除模式 0-不包含，1-包含 */
     INCLUDE?: string,
     /** 剂型（在生成模式非手动输入时显示） */
     DOSAGE_FORMS_TYPE?: string,
     /** 毒精麻分类（在生成模式非手动输入时显示） */
     PSY_TYPE_CODE?: string,
     

}

export interface IOrderHeadPCD {
     /** 制单人 用于前端展示 */
     FRONT_CREATE_EMPE_NAME?: string,
     /** 单据类型 */
     DOCUMENT_TYPE?: string,
     /** 当前单号 */
     orderNo: string;
     /** 保存生成的单据号 */
     INOUT_NO: string,
     /** 类型 
      * 1:采购入库 
      * 2:采购退货  
      * 3:库房间 入出库单与退药单 
      * 4:库房与科室 入出库单 
      * 5:科研经费 
      * 6:日常损益单 
      * 7:盘存损益
      * 8:药房请领 
      * 9:科室请领 
      * 10:调拨申请 
      * 11:调拨出入库 
      * 12 :大输液申领
     */
     INOUT_TYPE: string,
     /** 起始库房（或者部门id） 类型为1或12、15、16时为对应供货商id */
     OUTDEPOT_ID: string,
     /** 起始库房（或者部门名称） 类型为1或12、15、16时为对应供货商名称 */
     OUTDEPOT_NAME: string,
     /** 目标库房（或者部门id） 类型为1或12、14时为对应供货商id */
     INDEPOT_ID: string,
     /** 目标库房（或者部门名称） 类型为1或12、14时为对应供货商名称 */
     INDEPOT_NAME: string,
     /** 发票号 */
     INVOICE_NO: string,
     /** 创建人 */
     CREATE_EMPE: string,
     /** 制单人id */
     MAKE_EMPE?: string,
     /** 申请单号 */
     APPLY_NO: string,
     /** 制单时间 */
     MAKE_DATE: string,
     /** 申请人id */
     APPLY_EMPE: string,
     /** 是否是快照单据 */
     SOURCE: "" | "1",
     /** 状态 */
     STATUS: string,
     /** 备注 */
     REMARK: string,
     /** 生成模式 */
     PLANTYPE: string,
     /** 单据药品类型 0 全部 1 西药 2 成药 3 中草药 */
     DRUG_TYPE: string[] | string,
     /** 购入总金额 */
     STOCK_TOTAL: number,
     /** 批发总金额 */
     // TRADE_TOTAL: number,
     /** 零售总金额 */
     RETAIL_TOTAL: number,
}

/** 按高低储获取请领单数据出参 */
export interface GetQldepotByhlStorage {
     PINYIN: string,
     /** 产地ID */
     AREA_ID: string,
     /** 请领数量 */
     AMOUNT: number,
     /** 包装量 */
     PACKAGE_QUANTITY: string,
     /** 包装单位名称 */
     PACKAGE_UNIT_NAME: string,
     /** 批零系数 */
     FACTOR: string,
     /** 药品名称 */
     DRUG_NAME: string,
     /** 产地名称 */
     DRUG_AREA: string,
     /** 包装量单位 */
     PACKAGE_UNIT_CODE: string,
     /** 可用库存 */
     KY_STORAGE: string,
     /** 规格 */
     DRUG_SPEC: string,
     /** 序号 */
     SORT_NO: string,
     /** 药品ID */
     DRUG_ID: string,
     /** 批零系数单位名称 */
     FACTOR_UNIT_NAME: string,
     /** 仓位号 */
     STOCK_NO: string,
     /** 进货价 */
     STOCK_PRICE: number,
     /** 进货金额 */
     STOCK_AMOUNT: string;
     /** 零售价 */
     RETAIL_PRICE: number;
     /** 零售金额 ß*/
     RETAIL_AMOUNT: string;
}

export interface IOutDepotListAccount {
     /** 零售金额 */
    RETAIL_AMOUNT: number,
    /** 有效期 */
    EXPIRATION_DATE: string,
    /** 盈亏数量 */
    AMOUNT_ACT: number,
    /** 购入价 */
    STOCK_PRICE: number,
    /** 购入金额 */
    STOCK_AMOUNT: number,
    /** 生产厂家名称 */
    DRUG_AREA_NAME: string,
    /** 药品名称 */
    DRUG_NAME: string,
    /** 药品ID */
    DRUG_ID: string,
    /** 批零系数对应单位名称 */
    FACTOR_UNIT_NAME: string
}

export interface IOrderItem {
     /** 批准文号 */
     APPROVAL_NO: string,
     /** 剂型名称 */
     DOSAGE_FORMS_TYPE_NAME: string,
     /** 药品类型 */
     DRUG_TYPE: string,
     /** 真实批号 */
     OLD_BATCH?: string,
     /** 供货商名称 */
     SUPPLIER_NAME: string,
     /** 老单号 */
     OLD_INOUT_ID?: string,
     /** 起始库房库存 */
     QSKFKY_STORAGE: string,
     /** 目标库房库存 */
     MBKFKY_STORAGE: string,
     /** 起始库房仓位 */
     QSKF_CW: string,
     /** 目标库房仓位 */
     MBKF_CW: string,
     /** 序号 */
     SORT_NO: number,
     /** 药品ID */
     DRUG_ID: string,
     /** 药品名称 */
     DRUG_NAME: string,
     /** 生产厂家ID */
     DRUG_AREA_ID: string,
     /** 生产厂家名称 */
     DRUG_AREA_NAME: string,
     /** 产地，草药颗粒剂专用 - 选填 - 填中文  */
     DRUG_FACTORY_ID: number,
     /** 拼音码 */
     PINYIN: string,
     /** 批零系数 */
     //  FACTOR: number,
     /** 批零系数对应单位id */
     //  FACTOR_UNIT_CODE: string,
     /** 批零系数对应单位名称 */
     //  FACTOR_UNIT_NAME: string,
     /** 批号 - 必填  */
     BATCH_NO: string,
     /** 发票号 - 非必填 */
     INVOICE_NO: string,
     /** 有效期 - 非必填 */
     EXPIRATION_DATE: string,
     /** 生产日期 - 必填 */
     PRODUCT_DATE: string,
     /** 包装量单位 */
     PACKAGE_UNIT_NAME: string,
     /** 数量 - 必填 */
     AMOUNT: number,
     /** 购入价 - 必填 */
     STOCK_PRICE: number,
     /** 购入金额 - 计算 */
     STOCK_AMOUNT: number,
     /** 预发药数量 */
     PRE_DISPENSE_STORAGE: string,
     /** 批发单价  */
     TRADE_PRICE?: number,
     /** 批发金额 */
     TRADE_AMOUNT?: number,
     /** 零售价 - 药品数据插入 */
     RETAIL_PRICE: number,
     /** 零售金额 - 药品数据插入 */
     RETAIL_AMOUNT: number,
     /** 其它系统对应码 */
     ORTHER_CODE1: string,
     /** 其它系统对应码 */
     ORTHER_CODE2: string,
     /** 其它系统对应码 */
     ORTHER_CODE3: string,
     /** 规格 - 药品数据插入 */
     DRUG_SPEC: string,
     INI_ID: string,
     ORTHER: string,
     KY_STORAGE: number,
     PACKAGE_QUANTITY: number,
     FACTOR: number,
     FACTOR_UNIT_CODE: string,
     FACTOR_UNIT_NAME: string,
     UNIT_NAME: string,
     LS_DJ: number,
     /** 仓位号 */
     STOCK_NO: string,
}


export interface IZeroData {
     /** 差额数量 */
     OLD_AMOUT: number,
     AMOUNT_ACT: number,
    /** 生产厂家ID */
    DRUG_AREA_ID: string,
    /** 批次可用库存 */
    PCKY_STORAGE: string,
    /** 购入价 */
    STOCK_PRICE: number,
    /** 条码号 */
    BARCODE: any,
    /** 药品名称 */
    DRUG_NAME: string,
    /** 生产日期 */
    PRODUCT_DATE: any,
    /** 零售价 */
    RETAIL_PRICE: number,
    /** 起始库房可用库存 */
    QSKFKY_STORAGE: string,
    /** 目标库房可用库存 */
    MBKFKY_STORAGE: string,
    /** 数量 */
    AMOUNT: number,
    /** 批发单价 */
    TRADE_PRICE: number,
    /** 批零系数对应单位名称 */
    FACTOR_UNIT_NAME: string,
    /** 其它系统对应码 */
    ORTHER_CODE1: any,
    /** 其它系统对应码 */
    ORTHER_CODE3: any,
    /** 其它系统对应码 */
    ORTHER_CODE2: any,
    /** 批零系数 */
    FACTOR: number,
    /** 删除标志 */
    DEL_FLAG: string,
    /** 批号 */
    BATCH_NO: any,
    /** 购入金额 */
    STOCK_AMOUNT: number,
    /** 发票号 */
    INVOICE_NO: any,
    /** 产地，草药颗粒剂专用 */
    DRUG_FACTORY_ID: any,
    /** 零售金额 */
    RETAIL_AMOUNT: number,
    /** 有效期 */
    EXPIRATION_DATE: any,
    /** 规格 */
    DRUG_SPEC: string,
    /** 老明细ID */
    OLD_INOUT_ID: string,
    /** 生产厂家名称 */
    DRUG_AREA_NAME: string,
    /** 批零系数对应单位id */
    FACTOR_UNIT_CODE: string,
    RN: number,
    /** 药品ID */
    DRUG_ID: string,
    /** 批发金额 */
    TRADE_AMOUNT: number
}

export interface IInoutDepot {
     /** 损益类型 1:报益，2:报损 */
     SY_FLAG: string,
     /** 损益类型名称 */
     SY_FLAG_MC: string,
     /** 采购计划导入标志 */
     INPORT_NAME: string,
     /** 零库存标志 */
     ZERO_NAME: string,
     /** 制单人id */
     MAKE_EMPE: string,
     ZDRXM: string,
     /** 类型 1:采购入库 2:采购退货  3:库房间 入出库单与退药单" +
            "4:库房与科室 入出库单 5:科研经费 6:日常损益单 7:盘存损益" +
            "8:药房请领 9:科室请领 10:调拨申请 11:调拨出入库 12 :大输液申领 */
     INOUT_TYPE: string,
     /** 创建人 */
     CREATE_EMPE: string,
     /** 目标库房（或者部门id） 类型为1或12、14时为对应供货商id */
     INDEPOT_ID: string,
     /** 单据标志：O新单据，√已审核 */
     FLAG: string,
     /** 起始库房（或者部门名称） 类型为1或12、15、16时为对应供货商名称 */
     OUTDEPOT_NAME: string,
     /** 目标库房（或者部门名称） 类型为1或12、14时为对应供货商名称 */
     INDEPOT_NAME: string,
     /** 制单日期 */
     MAKE_DATE: string,
     /** 创建日期 */
     CREATE_DATE: string,
     /** 状态：0:新单据 1:已审核 2:已接收 */
     STATUS: string,
     /** 保存生成的单据号 */
     INOUT_NO: string,
     /** 发票号 */
     INVOICE_NO: string,
     /** （请领单生成的）出库单号 */
     NEWINOUT_NO: string,
     /** 起始库房（或者部门id） 类型为1或12、15、16时为对应供货商id */
     OUTDEPOT_ID: string,
     /** 备注 */
     REMARK: string,
     /** 审核日期 */
     AUDIT_DATE: string,
     /** 审核人 */
     SHRXM: string,
     /** 接收人 */
     RECEIVE_EMPE: string,
     /** 接收日期 */
     RECEIVE_DATE: string,
     /** 接收人姓名 */
     JSRXM: string,
     /** 药品类型 */
     DRUG_TYPE: string,
}

export interface IForIndepot {
     /** 批准文号 */
     APPROVAL_NO: string,
     /** 剂型名称 */
     /** 药库库存 */
     YKKC: string,
     /** 门诊库存 */
     MZKC: string,
     /** 病区库存 */
     BQKC: string,
     /** 老单号 */
     OLD_INOUT_ID?: string,
     /** 拼音码 */
     PINYIN: string,
     SUPPLIER_ID: string,
     SUPPLIER_NAME: string,

     STOCK_NO: string,
     PACKAGE_QUANTITY: number,
     UPDATE_DATE: string,
     pym: string,
     EFFECTIVE_FALG: string,
     /** 购入价 */
     STOCK_PRICE: number,
     /** 购入金额 */
     STOCK_AMOUNT: number
     DDD_VALUE: number,
     LOW_STORAGE: number,
     /** 药品名称 */
     DRUG_NAME: string,
     MAX_DOSE: number,
     ROUND_TYPE: string,
     IS_ANTI_RATIO: string,
     CHARGE_TYPE_CODE: string,
     SKIN_DAYS: number,
     PHARM_SORT_NAME: string,
     STANDARD_CODE: string,
     PACKAGE_FLAG: string,
     COUNT_ACCOUNT_FLAG: string,
     PACK_UNIT_CODE: string,
     PRICE: number,
     /** 创建人 */
     CREATE_EMPE: string,
     AREA_NAME: string,
     NAME_APPROVED: string,
     PACKAGE_UNIT_NAME: string,
     DEL_FLAG: string,
     /** 单据药品类型 0 全部 1 西药 2 成药 3 中草药 */
     DRUG_TYPE: string,
     CREATE_DATE: string,
     UPDATE_EMPE: string,
     /** 规格 */
     DRUG_SPEC: string,
     PRT_DRUG_NAME: string,
     DOSAGE_FORMS_TYPE: string,
     REAL_STORAGE: number,
     FROZEN_STORAGE: number,
     PRE_DISPENSE_STORAGE: number,
     /** 单位 */
     FACTOR_UNIT_NAME: string,
     OPEN_FLAG: string,
     AREA_ID: string,
     APPRNO_TYPE_NAME: string,
     DEPOT_ID: string,
     PACK_UNIT_NAME: string,
     /** 生产厂家ID */
     DRUG_AREA_ID: string,
     /** 生产厂家 */
     DRUG_AREA_NAME: string,
     DRUG_AREA: string,
     PACKAGE_UNIT_CODE: string,
     /** 零售价 */
     RETAIL_PRICE: number,
     TRADE_NAME: string,
     UNIT_NAME: string,
     IS_DRUG_RATIO: string,
     PRT_DRUG_SPEC: string,
     /** 剂型名称 */
     DOSAGE_FORMS_TYPE_NAME: string,
     HIGH_STORAGE: number,
     /** 批零系数 */
     FACTOR: number,
     SKIN_SORT: string,
     ANTIBIOTIC_GRADE: string,
     PHARM_SORT_CODE: string,
     STORAGE_CONDITION: string,
     AUDIT_FLAG: string,
     /** 批零系数对应单位id */
     FACTOR_UNIT_CODE: string,
     /** 药品ID */
     DRUG_ID: string,
     DAY_DOSE: number,
     /** 最近供应商 */
     PRE_SUPPLIER: string,
     /** 手动计划量 */
     HAND_AMOUNT: number,
}

export interface IOutdepot {
     /** 可用库存 */
     KY_STORAGE: number,
     /** 库房id */
     DEPOT_ID: string,
     /** 拼音简码 */
     PINYIN: string,
     /** 药品名称 */
     DRUG_NAME: string,
     /** 药品ID */
     DRUG_ID: string,
     /** 包装单位 */
     PACKAGE_UNIT_NAME: string,
     /** 批零系数单位 */
     FACTOR_UNIT_NAME: string,
     /** 包装量 */
     PACKAGE_QUANTITY: string,
}

export interface ImportDataOut {
     /** 系数 */
     FACTOR: string,  
     /** 系数单位id */
     FACTOR_UNIT_CODE: string, 
     /** 单位 */
     FACTOR_UNIT_NAME: string,
     /** 规格 */
    DRUG_SPEC: string,
    /** 拼音 */
    PINYIN: string,
    /** 生产厂家ID */
    DRUG_AREA_ID: string,
    /** 仓位号 */
    CWH: any,
    /** 手动计划量 */
    HAND_AMOUNT: number,
    /** 购入价 */
    STOCK_PRICE: number,
    /** 最近一次供应商id */
    SUPPLIER_ID: string,
    /** 药品名称 */
    DRUG_NAME: string,
    /** 供应商名称 */
    SUPPLIER_NAME: string,
    /** 产地名称 */
    DRUG_AREA: string,
    /** 药品ID */
    DRUG_ID: string,
     /** 药库库存 */
     YKKC: string,
     /** 门诊库存 */
     MZKC: string,
     /** 病区库存 */
     BQKC: string,
}

export interface ImportInoutDataOut {
     /** 拼音 */
    PINYIN: string,
    /** 生产厂家ID */
    DRUG_AREA_ID: string,
    /** 购入价 */
    STOCK_PRICE: number,
    /** 最近一次供应商id */
    SUPPLIER_ID: string,
    /** 批零系数 */
    FACTOR: number,
    /** 药品名称 */
    DRUG_NAME: string,
    /** 产地名称 */
    DRUG_AREA: string,
    /** 规格 */
    DRUG_SPEC: string,
    /** 仓位号 */
    CWH: any,
    /** 手动计划量 */
    HAND_AMOUNT: number,
    /** 批零系数对应单位id */
    FACTOR_UNIT_CODE: string,
    /** 供应商名称 */
    SUPPLIER_NAME: string,
    /** 药品ID */
    DRUG_ID: string,
    /** 批零系数对应单位名称 */
    FACTOR_UNIT_NAME: string,
    /** 药库库存 */
    YKKC: string,
    /** 门诊库存 */
    MZKC: string,
    /** 病区库存 */
    BQKC: string,
}

export interface IDrugInfoListForQldepot {
     /** 产地id */
     AREA_ID: string,
     /** 库房id */
     DEPOT_ID: string,
     /** 拼音码 */
     PINYIN: string,
     /** 零售价 */
     PRICE: number,
     /** 产地名称 */
     AREA_NAME: string,
     /** 包装量 */
     PACKAGE_QUANTITY: number,
     /** 包装量单位名称 */
     PACKAGE_UNIT_NAME: string,
     /** 批零系数 */
     FACTOR: number,
     /** 药品名称 */
     DRUG_NAME: string,
     /** 包装量单位id */
     PACKAGE_UNIT_CODE: string,
     /** 规格 */
     DRUG_SPEC: string,
     /** 批零系数对应单位id */
     FACTOR_UNIT_CODE: string,
     /** 批零系数名称 */
     UNIT_NAME: string,
     /** 药品ID */
     DRUG_ID: string
     /** 进货价 */
     STOCK_PRICE: number,
     /** 仓位号 */
     STOCK_NO: string,
     /** 起始库房库存 */
     QSKF_KYKC: string,
     /** 目标库房库存 */
     MBKF_KYKC: string,
     /** 消耗量 */
     XHL: string,
}

export interface IBatch {
     /** 产地编号 */
     AREA_ID: string,
     /** 库房id */
     DEPOT_ID: string,
     /** 拼音简码 */
     PINYIN: string,
     /** 产地名称 */
     AREA_NAME: string,
     /** 包装量 */
     PACKAGE_QUANTITY: number,
     /** 包装单位名称 */
     PACKAGE_UNIT_NAME: string,
     /** 入库记录id */
     INI_ID: string,
     /** 批零系数 */
     FACTOR: number,
     /** 购入价 */
     STOCK_PRICE: number,
     /** 批发价 */
     TRADE_PRICE: number,
     /** 批次 */
     BATCH_NO: string,
     /** 购入金额 */
     STOCK_AMOUNT: number,
     /** 药品名称 */
     DRUG_NAME: string,
     /** 包装单位 */
     PACKAGE_UNIT_CODE: string,
     /** 可用库存 */
     KY_STORAGE: number,
     /** 零售价 */
     RETAIL_PRICE: number,
     /** 规格 */
     DRUG_SPEC: string,
     /** 有效期 */
     EXPIRATION_DATE: string,
     /** 批零系数对应单位id */
     FACTOR_UNIT_CODE: string,
     /** 药品id */
     DRUG_ID: string,
     /** 批零系数对应单位名称 */
     FACTOR_UNIT_NAME: string
}

export interface InsetDepotOut {
     /** 生成的单据单据号 */
     INOUT_NO: string
}

export interface IInvertorys {
     /** 单号 */
     INVENTORY_NO: string,
     /** 库房id */
     DEPOT_ID: string,
     /** 盘存月份('yyyy-mm') */
     INVENTORY_MONTH: string,
     /** 制单人id */
     MAKE_EMPE: string,
     /** 制单日期 */
     MAKE_DATE: string,
     /** 状态(0:新单  1:确认录入完成  2:已完成盘存制单 3:恢复盘前数据) */
     STATUS: string,
     /** 单据的药品类型 0全部 1西药 2 成药 3草药 */
     DRUG_TYPE: string,
     /** 创建时间 */
     CREATE_DATE: string,
     /** 创建人 */
     CREATE_EMPE: string,
     /** 最后更新时间 */
     UPDATE_DATE: string,
     /** 最后更新人 */
     UPDATE_EMPE: string,
     /** 删除标记 */
     DEL_FLAG: string
     ZDR:string
     REMARK:string
     /**单据类型 */
     DOCUMENT_TYPE:string
     DOCUMENT_TYPE_NAME:string
}

export interface IForOutdepotDetailByPc {
     /** 起始库房仓位 */
     STOCK_NO: string,
     /** 产地编号 */
     AREA_ID: string,
     /** 库房id */
     DEPOT_ID: string,
     /** 拼音简码 */
     PINYIN: string,
     /** 产地名称 */
     AREA_NAME: string,
     /** 包装单位名称 */
     PACKAGE_UNIT_NAME: string,
     /** 药品类型 */
     DRUG_TYPE_NAME: string,
     /** 入库记录id */
     INI_ID: string,
     /** 购入价 */
     STOCK_PRICE: number,
     /** 批次 */
     BATCH_NO: string,
     /** 药品名称 */
     DRUG_NAME: string,
     /** 可用库存 */
     KY_STORAGE: number,
     /** 零售价 */
     RETAIL_PRICE: number,
     /** 规格 */
     DRUG_SPEC: string,
     /** 药品id */
     DRUG_ID: string
}

export interface ILostList {
     /** 单据药品类型 0 全部 1 西药 2 成药 3 中草药 */
     DRUG_TYPE: string,
     /** 规格 */
     DRUG_SPEC: string,
     /** 生产厂家ID */
     DRUG_AREA_ID: string,
     /** 数量 */
     AMOUNT: number,
     /** 差异数量 */
     DIFF: number,
     /** 生产厂家名称 */
     DRUG_AREA_NAME: string,
     /** 实盘数 */
     REAL_AMOUNT: number,
     /** 药品名称 */
     DRUG_NAME: string,
     /** 差异金额 */
     DIFFPRICE: number,
     /** 药品ID */
     DRUG_ID: string
     /** 批次 */
     BATCH_NO: string;
}