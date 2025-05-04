/** 空安瓿待回收查询、空安瓿待销毁查询、空安瓿已销毁查询查询出参 */
export interface ManagementOfEmptyAmpoulesOut {
	/** 诊断名称 */
	DIAG_NAME: string,
	/** 处方编号 */
	CFBH: string,
	/** 病区/门诊 */
	MZBQ: string
	/** 发药日期 */
	FYRQ: string,
	/** 患者姓名 */
	BRXM: string,
	/** 性别 */
	XB: string,
	/** 年龄 */
	NL: string,
	/** 药品名称 */
	YPMC: string,
	/** 规格 */
	YPGG: string,
	/** 处方量 */
	CFL: string,
	/** 用药途径 */
	YYTJ: string,
	/** 身份证 */
	SFZH: string,
	/** 住院号 */
	ZYH: string,
	/** 处方囋编号 */
	CFJBH: string,
	/** 处方流水号 */
	CFLSH: string,
	/** 疾病名称 */
	JBMC: string,
	/** 开方医生 */
	KFYS: string,
	/** 盘点药师 */
	PDYS: string,
	/** 发药人 */
	FYR: string,
	/** 备药人 */
	BYR: string,
	/** 复审人 */
	SH_YSXM: string,
	/** 取药姓名 */
	QYR: string,
	/** 取药身份证 */
	QYR_SFZH: string,
	/** 药品性质 */
	PSY_TYPE_NAME: string
	/** 数据来源 */
	SJLY: string
	/** 批号 */
	PH: string
	/** 流水号 */
	LSH: string
	DJJL_ID: string,
	SL: string,
}


/** 空安瓿待回收查询、空安瓿待销毁查询、空安瓿已销毁查询查询入参 */
export interface ManagementOfEmptyAmpoulesIn {
	/** 病区id */
	bqid: string,
	/** 开始时间 */
	begindate: string
	/** 结束时间 */
	enddate: string
	/** 库房id */
	kfid: string
}

/** 空安瓿作业账册入参 */
export interface EmptyAmpouleOperationAccountBookIn {
	/** 病区id */
	bqid: string,
	/** 开始时间 */
	starttime: string,
	/** 结束时间 */
	endtime: string,
	/** 类型（0:发放 1：回收 2：销毁) */
	lx: string
}

/** 空安瓿作业账册出参 */
export interface EmptyAmpouleOperationAccountBookOut {
	/** 病区id */
	BQ_ID: string,
	/** 操作时间 */
	CZ_SJ: string,
	/** 药品id */
	YP_ID: string,
	/** 产地id */
	CD_ID: string,
	/** 医嘱执行流水号 */
	YZZX_LSHID: string,
	/** 类型 */
	LX: string,
	/** 科室名称 */
	BM_MC: string,
	/** 病人姓名 */
	PAT_NAME: string,
	/** 药品名称 */
	YP_MC: string,
	/** 登记记录id */
	DJJL_ID: string,
	/** 批号 */
	PH: string,
	/** 数量 */
	SL: string
	/** 作业人 */
	XM: string,
}


/** 空安瓿回收销毁入参 */
export interface CycleDestroyInput {
	/** 药品id */
	yp_id: string,
	/** 产地id */
	cd_id: string,
	/** 医嘱执行流水号 */
	yzzx_lshid: string,
	/** 病区id */
	bq_id: string,
	/** 批号 */
	ph: string,
	/** 1回收2销毁 */
	lx: string,
	/** 数量 */
	sl: string,
	/** 操作人 */
	czr: string,
	/** 复核人 */
	fhr: string,
	/** 登记记录id */
	djjlid: string
}
