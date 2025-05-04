export interface DrugStorage {
  /** 采购价 */
  STOCK_PRICE: number,
  /** 零售价 */
  RETAIL_PRICE: number,
  /** 采购金额 */
  STOCK_STOTAL: number,
  /** 自编码 */
  OTHER_CODE5: string,
  /** 真实库存金额 */
  REAL_STOTAL: number,
  /** 可用库存金额 */
  KT_STOTAL: number,
  /** 仓位号 */
  STOCK_NO: string,
  /** 库房名称 */
  DEPOT_NAME: string,
  /** 可用库存 */
  KY_STORAGER: number,
  /** 库房id */
  DEPOT_ID: string,
  /** 拼音简码 */
  PINYIN: string,
  /** 产地ID */
  DRUG_AREA_ID: string,
  /** 产地名称 */
  AREA_NAME: string,
  /** 药品通用名 */
  NAME_APPROVED: string,
  /** 批零系数 */
  FACTOR: number,
  /** 有效标志 */
  EFFECTIVE_FALG: string,
  /** 药品名称 */
  DRUG_NAME: string,
  /** 序号 */
  ROW_ID: number,
  /** 规格 */
  DRUG_SPEC: string,
  /** 单位 */
  UNIT_NAME: string,
  /** 真实库存 */
  REAL_STORAGE: number,
  /** 批零系数对应单位id */
  FACTOR_UNIT_CODE: string,
  /** 预备发药数量 */
  PRE_DISPENSE_STORAGE: number,
  /** 药品ID */
  DRUG_ID: string,
  /** 冻结数量 */
  FROZEN_STORAGE: string,
  /** 剂型 */
  DOSAGE_FORMS_TYPE_NAME: string,
  /** 零售价 */
  PRICE: string,
  /** 药品标准码 */
  STANDARD_CODE: string,
  /** 药库库存 */
  YKKC: string,
  /** 门诊库存 */
  MZKC: string,
  /** 病区库存 */
  BQKC: string,
}

export interface StorageDetail {
  /** 冻结数量 */
  FROZEN_STORAGE: string,
  /** 生产厂家ID */
  DRUG_AREA_ID: string,
  /** 产地名称 */
  AREA_NAME: string,
  /** 购入价 */
  STOCK_PRICE: number,
  /** 购入金额 */
  STOCK_AMOUNT: number,
  /** 批零系数 */
  FACTOR: number,
  /** 批号 */
  BATCH_NO: string,
  /** 药品名称 */
  DRUG_NAME: string,
  /** 零售价 */
  RETAIL_PRICE: number,
  /** 零售金额 */
  RETAIL_AMOUNT: number,
  /** 可用库存 */
  KY_STORAGE: number,
  /** 规格 */
  DRUG_SPEC: string,
  /** 失效期 */
  EXPIRATION_DATE: string,
  /** 批发单价 */
  TRADE_PRICE: number,
  /** 单位 */
  UNIT_NAME: string,
  /** 实际库存 */
  REAL_STORAGE: number,
  /** 批零系数对应单位id */
  FACTOR_UNIT_CODE: string,
  /** 预发药数量 */
  PRE_DISPENSE_STORAGE: number,
  /** 药品ID */
  DRUG_ID: string,
  /** 批零系数对应单位名称 */
  FACTOR_UNIT_NAME: string
}


export interface DSConfig {
  /** 自编码 */
  OTHER_CODE5: string,
  /**库房ID */
  DEPOTID: string,
  /**拼音码 */
  PINYIN: string,
  /**是否展示库存为零 */
  NOTZERO: string
  /**有效标志 */
  EFFECTIVE_FALG: string
}

export interface IDConfig {
  /**库房ID */
  DEPOT_ID: string,
  /**药品ID */
  DRUG_ID: string
}