
export interface DrugSupplierOutput {
  /** 类型 1:采购入库 2:采购退货  3:库房间 入出库单与退药单" +
            "4:库房与科室 入出库单 5:科研经费 6:日常损益单 7:盘存损益" +
            "8:药房请领 9:科室请领 10:调拨申请 11:调拨出入库 12 :大输液申领 */
	INOUT_TYPE: string,
  /** 库房ID */
	INDEPOT_ID: string,
  /** 供货商名称 */
  SUPPLIER_NAME: string,
  /** 库房名称 */
  DEPOT_NAME: string,
  /** 制单日期 */
	MAKE_DATE: string,
  /** 状态：0新单据，1已审核，2已接收 */
	STATUS: string,
	/** 状态 */
	STATUSMC: string,
  /** 保存生成的单据号 */
	INOUT_NO: string,
  /** 供货商id */
	OUTDEPOT_ID: string,
  /** 单据类型：1.采购入库 2采购退货 */
	TYPE_NAME: string,
	/** 发票号 */
	INVOICE_NO: string,
}

export interface DrugSupplierInput {
  /**库房ID */
	depotId: string,
	/**供货商 */
	supplierId: string,
  /**开始时间 */
	startTime: string,
  /**结束时间 */
	endTime: string,
	/**单据号 */
	INOUT_NO: string,
	/**发票号 */
	INVOICE_NO: string,
	/**状态 */
	STATUS: string,
	/**状态 */
	DRUG_ID: string,
}

export interface OutdepotLIstDetailOutput {
	/**生产厂家 */
	DRUG_AREA_ID: string,
	/**包装量 */
	PACKAGE_QUANTITY: number,
	/**购入价 */
	STOCK_PRICE: number,
	/**药品名称 */
	DRUG_NAME: string,
	/**生产日期 */
	PRODUCT_DATE: string,
	/**包装单位id */
	PACKAGE_UNIT_CODE: string,
	/**零售价 */
	RETAIL_PRICE: number,
	/**数量 */
	AMOUNT: number,
	/**序号 */
	SORT_NO: number,
	/**批零系数对应单位名称 */
	FACTOR_UNIT_NAME: string,
	/**包装量单位名称 */
	PACKAGE_UNIT_NAME: string,
	/**批零系数 */
	FACTOR: number,
	/**批号 */
	BATCH_NO: string,
	/**购入金额 */
	STOCK_AMOUNT: number,
	/**产地 */
	DRUG_FACTORY_ID: string,
	/**零售金额 */
	RETAIL_AMOUNT: number,
	/**出入库记录明细id */
	INOUT_ID: string,
	/**有效期 */
	EXPIRATION_DATE: string,
	/**规格 */
	DRUG_SPEC: string,
	/**生产厂家名称 */
	DRUG_AREA_NAME: string,
	/**批零系数对应单位id */
	FACTOR_UNIT_CODE: string,
	/**药品ID */
	DRUG_ID: string
}

export interface OutdepotLIstDetailInput {
	/**单据号 */
	INOUT_NO: string
}
