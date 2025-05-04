/** 其他出入库单据查询出参 */
export interface IInoutDepart {
  /** 审核人 */
  SHRXM: string,
  /** 审核日期 */
  AUDIT_DATE: string,
  /** 制单人id */
  MAKE_EMPE: string;
  /** 制单人姓名 */
  ZDRXM: string;
  /** 起始库房（或者部门名称） 类型为1或12、15、16时为对应供货商名称 */
  OUTDEPOT_NAME: string;
  /** 目标库房（或者部门名称） 类型为1或12、14时为对应供货商名称 */
  INDEPOT_NAME: string;
  /** 制单日期 */
  MAKE_DATE: string;
  /** 在院状态 */
  STATUS: string;
  /** 保存生成的单据号 */
  INOUT_NO: string;
  /** 起始库房（或者部门id） 类型为1或12、15、16时为对应供货商id */
  OUTDEPOT_ID: string;
  /** 批发总金额 */
  TRADE_TOTAL: number;
  /** 零售总金额 */
  RETAIL_TOTAL: number;
  /** 类型 1:采购入库 2:采购退货  3:库房间 入出库单与退药单
   * 4:库房与科室 入出库单 5:科研经费 6:日常损益单 7:盘存损益
   * 8:药房请领 9:科室请领 10:调拨申请 11:调拨出入库 12 :大输液申领
   */
  INOUT_TYPE: string;
  /** 创建人 */
  CREATE_EMPE: string;
  /** 目标库房（或者部门id） 类型为1或12、14时为对应供货商id */
  INDEPOT_ID: string;
  /** 单据药品类型 0 全部 1 西药 2 成药 3 中草药 */
  DRUG_TYPE: string;
  /** 创建时间 */
  CREATE_DATE: string;
  /** 购入总金额 */
  STOCK_TOTAL: number;
}

/** 其他出入库单据查询入参 */
export interface InouotDepartIn {
  /** 其他出库默认分为1 */
  type: string;
  /** 单据号 */
  INOUT_NO: string;
  /** 单据类型 */
  INOUT_TYPE: string;
  /** 开始时间 */
  startTime: string;
  /** 结束时间 */
  endTime: string;
  /** 目标库房 */
  inDepoteId: string;
  /** 起始库房 */
  outDepoteId: string;
  /** 状态 */
  status: string;
}

/** 其他出入库单据明细查询出参 */
export interface IInoutDepartDetail {
  /** 起始库房仓位 */
  QSKF_CW: string,
  /** 目标库房仓位 */
  MBKF_CW: string,
  PINYIN: string;
  /** 生产厂家ID */
  DRUG_AREA_ID: string;
  /** 包装量 */
  PACKAGE_QUANTITY: number;
  /** 购入价 */
  STOCK_PRICE: number;
  /** 药品名称 */
  DRUG_NAME: string;
  /** 包装单位id */
  PACKAGE_UNIT_CODE: string;
  /** 零售价 */
  RETAIL_PRICE: number;
  /** 数量 */
  AMOUNT: number;
  /** 批发单价 */
  TRADE_PRICE: number;
  /** 序号 */
  SORT_NO: number;
  /** 批零系数对应单位名称 */
  FACTOR_UNIT_NAME: string;
  /** 包装量单位名称 */
  PACKAGE_UNIT_NAME: string;
  /** 批零系数 */
  FACTOR: number;
  /** 批号 */
  BATCH_NO: string;
  /** 购入金额 */
  STOCK_AMOUNT: number;
  /** 零售金额 */
  RETAIL_AMOUNT: number;
  /** 出入库记录明细id */
  INOUT_ID: string;
  /** 有效期 */
  EXPIRATION_DATE: string;
  /** 规格 */
  DRUG_SPEC: string;
  /** 生产厂家名称 */
  DRUG_AREA_NAME: string;
  /** 批零系数对应单位id */
  FACTOR_UNIT_CODE: string;
  ORTHER: string;
  /** 药品ID */
  DRUG_ID: string;
  /** 批发金额 */
  TRADE_AMOUNT: number;
}

/** 单据类型查询出参 */
export interface IInoutType {
  /** 类型名称 */
  LX_MC: string;
  /** 单据类型id */
  INOUT_TYPE: string;
  /** 拼音码 */
  PYM: string;
}

/** 根据拼音码获取药品列表出参 */
export interface IDrugInfoForOther {
  /** 可用库存 */
  KY_STORAGE: number;
  /** 产地编号 */
  AREA_ID: string;
  /** 产地名称 */
  AREA_NAME: string;
  /** 规格 */
  DRUG_SPEC: string;
  /** 库房id */
  DEPOT_ID: string;
  /** 拼音简码 */
  PINYIN: string;
  /** 药品名称 */
  DRUG_NAME: string;
  /** 药品ID */
  DRUG_ID: string;
}

/** 根据拼音码获取药品列表-科室退还出参 */
export interface IDrugInfoForKSTH extends IDrugInfoForOther {
    /** 包装量 */
    PACKAGE_QUANTITY: number,
    /** 包装单位id */
    PACKAGE_UNIT_CODE: string,
    /** 包装单位名称 */
    PACKAGE_UNIT_NAME: string,
    /** 批零系数 */
    FACTOR: number,
    /** 批零系数单位id */
    FACTOR_UNIT_CODE: string,
    /** 批零系数单位名称 */
    FACTOR_UNIT_NAME: string,
    /** 批号 */
    BATCH_NO: string,
    /** 购入价 */
    STOCK_PRICE: number,
    /** 批发价 */
    TRADE_PRICE: number
    /** 零售价 */
    RETAIL_PRICE: number,
    /** 有效期 */
    EXPIRATION_DATE: string,
  }

/** 根据拼音码获取药品列表明细出参 */
export interface IDrugInfoForOtherDetail {
  /** 产地编号 */
  AREA_ID: string;
  /** 库房id */
  DEPOT_ID: string;
  /** 拼音简码 */
  PINYIN: string;
  /** 产地名称 */
  AREA_NAME: string;
  /** 包装量 */
  PACKAGE_QUANTITY: number;
  /** 包装单位名称 */
  PACKAGE_UNIT_NAME: string;
  /** 入库记录id */
  INI_ID: string;
  /** 批零系数 */
  FACTOR: number;
  /** 购入价 */
  STOCK_PRICE: number;
  /** 批次 */
  BATCH_NO: string;
  /** 购入金额 */
  STOCK_AMOUNT: number;
  /** 药品名称 */
  DRUG_NAME: string;
  /** 包装单位 */
  PACKAGE_UNIT_CODE: string;
  /** 可用库存 */
  KY_STORAGE: number;
  /** 零售价 */
  RETAIL_PRICE: number;
  /** 批发价 */
  TRADE_PRICE: number;
  /** 规格 */
  DRUG_SPEC: string;
  /** 有效期 */
  EXPIRATION_DATE: string;
  /** 批零系数对应单位id */
  FACTOR_UNIT_CODE: string;
  /** 药品id */
  DRUG_ID: string;
  /** 批零系数对应单位名称 */
  FACTOR_UNIT_NAME: string;
}

export interface IOtherOrderHead {
  /** 制单人用于前端展示 */
  FRONT_CREATE_EMPE_NAME?: string,
  /** 保存生成的单据号 */
  INOUT_NO: string;
  /** 类型 1:采购入库 2:采购退货  3:库房间 入出库单与退药单
   * 4:库房与科室 入出库单 5:科研经费 6:日常损益单 7:盘存损益
   * 8:药房请领 9:科室请领 10:调拨申请 11:调拨出入库 12 :大输液申领
   */
  INOUT_TYPE: string;
  /** 起始库房（或者部门id） 类型为1或12、15、16时为对应供货商id */
  OUTDEPOT_ID: string;
  /** 起始库房（或者部门名称） 类型为1或12、15、16时为对应供货商名称 */
  OUTDEPOT_NAME: string;
  /** 目标库房（或者部门id） 类型为1或12、14时为对应供货商id */
  INDEPOT_ID: string;
  /** 目标库房（或者部门名称） 类型为1或12、14时为对应供货商名称 */
  INDEPOT_NAME: string;
  /** 发票号 */
  INVOICE_NO: string;
  /** 创建人 */
  CREATE_EMPE: string;
  /** 制单人id */
  MAKE_EMPE?: string;
  /** 申请单号 */
  APPLY_NO: string;
  /** 申请人id */
  APPLY_EMPE: string;
  /** 备注 */
  REMARK: string;
  /** 单据药品类型 0 全部 10 西药 20 成药 30 中草药 */
  DRUG_TYPE: string;
  DRUG_TYPE_ARR?: string[];
  /** 购入总金额 */
  STOCK_TOTAL: number;
  /** 批发总金额 */
  TRADE_TOTAL: number;
  /** 零售总金额 */
  RETAIL_TOTAL: number;
  MAKE_DATE: string;
  SOURCE: string;
  orderNo: string;
}

export interface IOtherOrderItem {
  /** 药品ID */
  DRUG_ID: string;
  /** 药品名称 */
  DRUG_NAME: string;
  /** 生产厂家ID */
  DRUG_AREA_ID: string;
  /** 生产厂家名称 */
  DRUG_AREA_NAME: string;
  PACKAGE_UNIT_NAME: string;
  
  /** 规格 */
  DRUG_SPEC: string;
  INI_ID: string;
  /** 有效期 */
  EXPIRATION_DATE: string;
  /** 数量 */
  AMOUNT: number;
  KY_STORAGE: number;
  /** 批号 */
  BATCH_NO: string;
  PINYIN: string;
  PACKAGE_QUANTITY: number;
  /** 批零系数 */
  FACTOR: number;
  /** 批零系数对应单位id */
  FACTOR_UNIT_CODE: string;
  /** 批零系数对应单位名称 */
  FACTOR_UNIT_NAME: string;
  selection: any;
  _X_ROW_KEY: string;
  /** 购入价 */
  STOCK_PRICE: number;
  /** 购入金额 */
  STOCK_AMOUNT: number;
  /** 批发单价 */
  TRADE_PRICE: number;
  /** 批发金额 */
  TRADE_AMOUNT: number;
  /** 零售价 */
  RETAIL_PRICE: number;
  /** 零售金额 */
  RETAIL_AMOUNT: string;
  ORTHER: string;
  /** 序号 */
  SORT_NO: number;
}
