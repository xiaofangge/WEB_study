export interface IAllergies {
	/** 过敏药物ID */
	GMS_ID: string,
	/** 过敏药物类型 */
	GMS_LX: any,
	/** 拼音简码 */
	PYM: string,
	/** 过敏药物名称 */
	GMS: string
}

export interface IDrugRoute {
	/** 给药途径ID */
	SIG_CODE: string;
	/** 给药途径名称 */
	SIG_NAME: string;
	/** 打印名称 */
	PRT_NAME: string;
	/** 拼音简码 */
	PINYIN: string;
	/** 删除标志 */
	DEL_FLAG: string;
	/** 创建时间 */
	CREATE_DATE: string;
	/** 创建人 */
	CREATE_EMPE: string;
	/** 最后更新时间 */
	UPDATE_DATE: string;
	/** 最后更新人 */
	UPDATE_EMPE: string;
	/** 分类 */
	SIG_TYPE: string;
	/** 住院对应医嘱 */
	ORDERID_ZY: string;
	/** 门诊对应医嘱 */
	ORDERID_MZ: string;
	/** 项目描述 */
	ITEM_DESC: string,
}

/** 诊断字典-出参 */
export interface IDictInfoDictIcd{
    /** ICD编码 */
    ICD_CODE: string,
    /** 疾病名称 */
    JB_MC: string,
    /** 诊断分类ID  1市医保 2省医保 */
    ZDFL_ID: string,
    /** 删除标志 */
    DEL_FLAG: string,
    /** 拼音码 */
    PYM: string,
    /** 创建时间 */
    CJSJ: string,
    /** 创建人 */
    CJR: string,
    /** 最后更新人 */
    ZHGXSJ: string,
    /** 是否传染病（0否1是） */
    CRB_FLAG: string,
    /** 糖尿病标志 */
    ICD_TNB_FLAG: string,
    /** 急性麻痹AFP标志，15岁以下上报 */
    AFP_FLAG: string,
    /** 食源性疾病标志 */
    SYXJB_FLAG: string,
    /** 隔离标志:当前诊断的病人是否需要隔离处理(隔离取药,隔离输液等) */
    GL_FLAG: string,
    /** 男女类型 0不控制，1是男性诊断，2是女性诊断 */
    SEXTYPE: string,
    /** 真实的icd编码 */
    REAL_ICDCODE: string
}

/** 医嘱字典-查询出参 */
export interface IOrder {
	/** 最后更新人 */
	ZHGXR: string;
	/** 物价审核人 */
	WJSHR: string;
	/** 急诊使用标志:'1'急诊可使用;'0'急诊不可用 */
	JZSY_FLAG: string;
	/** 执行科室 */
	ZXKS: string;
	/** 使用范围 1门诊 2 住院  3公用 */
	SYFY_FLAG: string;
	/** 最后更新时间 */
	ZHGXSJ: string;
	/** 儿童可用标志:'1'仅儿童使用;'0'公用 */
	ETSY_FLAG: string;
	/** '复制医嘱是保存的原yz_id */
	OLDYZ_ID: string;
	/** 价格 */
	PRICE: string;
	/** 使用范围名称 */
	SYFWMC: string;
	/** 删除标志 0否1是 */
	DEL_FLAG: string;
	/** 医嘱分类ID */
	YZFL_ID: string;
	/** 序号 */
	ROW_ID: string;
	/** 医嘱分类名称 */
	YZFL_MC: string;
	/** 可使用的分院代码，字符串由|分割 */
	FYDM: string;
	/** 自助开单标志：'0'否'1'是 */
	ZZKD_FLAG: string;
	/** 与其他系统对应码 */
	QTXYDYM: string;
	/** 创建人 */
	CJR: string;
	/** 科室名称 */
	BM_MC: string;
	/** 注意事项 */
	ZYSX: string;
	/** 线上问诊标志：'0'否'1'是 */
	XSWZ_FLAG: string;
	/** 分级诊疗下级医院开立标志  0否1是 */
	FJZL_FLAG: string;
	/** 创建时间 */
	CJSJ: string;
	/** 医嘱分类 */
	YZ_MC: string;
	/** 拼音码 */
	PYM: string;
	/** 对应序号（门诊使用） */
	DYXH: string;
	/** 快检可用标志:'1'仅快检使用;'0'公用 */
	KJSY_FLAG: string;
	/** 医嘱ID */
	YZ_ID: string;
	/** 检查部位 */
	JCBW: string;
	/** 重症监护（ICU）不收费标志   1  ICU不收费 */
	ICU_FLAG: string;
	/** 医嘱内有停用材料/诊疗标志(0,无,1,有) */
	WJSHBZ: string;
}

export interface IDrugUnit {
	/** 单位ID雪花算法 */
	UNIT_CODE: string,
	/** 单位名称 */
	UNIT_NAME: string,
	/** 有效标记0有效 1无效 */
	DEL_FLAG: string,
	/** 拼音码 */
	PINYIN: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string
}


export interface IDrugSkntstType {
	/** 皮试类型CODE */
	SKNTST_TYPE_CODE: string,
	/** 皮试类型名称 */
	SKNTST_TYPE_NAME: string,
	/** 拼音码 */
	PINYIN: string,
	/** 删除标记    ‘0’ 有效 */
	DEL_FLAG: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string,
	/** 0不皮试1皮试液2原液 */
	SKNTST_CLASS: string,
	/** 直接付费标志（0不是直接付费1是直接付费） */
	CHARGE_FLAG: string
}


export interface IDrugAreaItem {
	/** 药品剂型ID */
	FORM_CODE: string,
	/** 药品剂型名称 */
	FORM_NAME: string,
	/** 剂型等级（0 剂型分类，1剂型） */
	FORM_CLASS: string,
	/** 删除标记    ‘0’ 有效 */
	DEL_FLAG: string,
	/** 拼音码 */
	PINYIN: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string,
}

export interface IDrugPharmType {
	/** 药理分类ID */
	PHARM_TYPE_CODE: string,
	/** 药理分类名称 */
	PHARM_TYPE_NAME: string,
	/** 拼音码 */
	PINYIN: string,
	/** 删除标记    ‘0’ 有效 */
	DEL_FLAG: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 父类型 */
	PARENTTYPE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string
}

export interface IDrugareaDrugArea {
	/** 地区ID */
	AREA_ID: string,
	/** 地区名称 */
	AREA_NAME: string,
	/** 生产厂家简称 */
	SHORT_NAME: string,
	/** 生产厂家地址 */
	ADDRESS: string,
	/** 生产厂家电话 */
	PHONE: string,
	/** 生产厂家传真 */
	FAX: string,
	/** 生产厂家邮政编码 */
	POSTCODE: string,
	/** 备注 */
	REMARK: string,
	/** 药库使用标志 1:使用 0:禁用 */
	DRUG_USE_FLAG: string,
	/** 物资使用标志 1:使用 0:禁用 */
	MA_USE_FLAG: string,
	/** 删除标记    ‘0’ 有效 */
	DEL_FLAG: string,
	/** 拼音码 */
	PINYIN: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string
}


export interface IFlag {
	/** 唯一id */
	MARK_CODE: string;
	/** 名称 */
	MARK_NAME: string;
	/** 删除标志 */
	DEL_FLAG: string;
	/** 类型id */
	MARK_TYPE: string;
	/** 类型名称 */
	TYPE_NAME: string;
	/** 拼音码 */
	PINYIN: string;
}

export interface IChargeType {
	CHARGE_TYPE_CODE: string;
	CHARGE_TYPE_NAME: string;
	CHARGE_TYPE_CLASS: string;
	OUTPAT_INVOIC_TYPE: string;
	INPAT_INVOIC_TYPE: string;
	PINYIN: string;
	DEL_FLAG: string;
	CREATE_DATE: string;
	UPDATE_DATE: string;
	CREATE_EMPE: string;
	UPDATE_EMPE: string;
	SORT?: string;
}

export interface IDepot {
	/** 库房id */
	DEPOT_CODE: string,
	/** 库房名称 */
	DEPOT_NAME: string,
	/** 库房所属科室 */
	DEPOT_DEPART: string,
	/** 库房类型 5 药库   2 门诊药房  3病区药房 */
	TYPE: string,
	/** 出库方式   0 扣减库存(先进先出) 1 不扣库存 */
	EX_DEPOT_TYPE: string,
	/** 删除标志 */
	DEL_FLAG: string,
	/** 拼音码" */
	PINYIN: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string,
	/** 上一级库房id" */
	PARENT_DEPOT_CODE: string,

    MANUAL_RULE: string,
    INVENTORY_FLAG: string,
    MANUAL_WIN: string,
    PM_WORK_START_TIME: string,
    ALLOW_SUBDEPOT_DISPENSES: string,
    DISPENSE_OBJECT: string,
    POSITION: string,
    DISPENSE_FLAG: string,
    DEPOT_TYPE: string,
    OTHER_CODE: string,
    AM_WORK_START_TIME: string,
    PM_WORK_END_TIME: string,
    DRUG_MANAGEMENT: string,
    ALLOW_NIGHT_RETURN_FLAG: string,
    ZDYM: string,
    BRANCH_CODE: string,
    ALLOW_UNDEPOT_APPLY: string,
    ALLOW_NIGHT_DISPENSE_FLAG: string,
    USERS_GROUP: string,
    AM_WORK_END_TIME: string,
    PIVAS_FLAG: string,
    INVENTORY_MANA_TYPE: string,
    HOSPITAL_CODE: string,
    DISPENSE_TYPE: string,
}

export interface IDepart {
	/** 科室id */
	BM_ID: string,
	/** 科室名称 */
	BM_MC: string,
	/** 拼音码 */
	PYM: string,
}

export interface IPsy {
	/** 精神类药品分类CODE */
	PSY_TYPE_CODE: string,
	/** 精神类药品分类名称 */
	PSY_TYPE_NAME: string,
	/** 拼音码 */
	PINYIN: string,
	/** 删除标志 */
	DEL_FLAG: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string
}

export interface ISupplier {
	/** 供货商ID */
	SUPPLIER_CODE: string,
	/** 供货商名称 */
	SUPPLIER_NAME: string,
	/** 供货商简称 */
	SUPPLIER_SHORT_NAME: string,
	/** 拼音码 */
	PINYIN: string,
	/** 删除标记    ‘0’ 有效 */
	DEL_FLAG: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string,
	/** 1表示药库使用  0表示药库不使用 */
	DRUG_USE_FLAG: string,
	/** 1表示物资使用  0表示物资不使用 */
	MA_USE_FLAG: string,
}

export interface IAntibiotic {
	/** 抗生素等级ID */
	ANTIGRADE_CODE: string,
	/** 抗生素等级名称 */
	ANTIGRADE_NAME: string,
	/** 拼音码 */
	PINYIN: string,
	/** 删除标记    ‘0’ 有效 */
	DEL_FLAG: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string
}

export interface IDrugAlias {
	/** 拼音码 */
	PINYIN: string,
	/**药品别名ID */
	ANOTHER_NAME_ID: string;
	/**药品ID */
	DRUG_ID: string;
	/**药品别名 */
	NAME: string;
	/**产地ID */
	AREA_ID: string;
	/**名称类型 */
	NAME_TYPE: string;
	/**是否启用 */
	DEL_FLAG: string;
	/**创建时间 */
	CREATE_DATE: string;
	/**创建人 */
	CREATE_EMPE: string;
	/**最后更新时间 */
	UPDATE_DATE: string;
	/**最后更新人 */
	UPDATE_EMPE: string;
}

export interface IOrderExecFreq {
	/** 执行频率CODE */
	EXEC_FREQ_CODE: string,
	/** 执行频率 */
	EXEC_FREQ_NAME: string,
	/** 删除标志 */
	DEL_FLAG: string,
	/** 拼音码 */
	PINYIN: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string,
	/** 每日执行次数 */
	NUMBER_PD: string,
	/** "1一日多次2多日一次0无次数(无用)" */
	EXEC_FREQ_TYPE: string,
	/** 间隔时间 */
	INTERVAL_TIME: string,
	/** 多日一次执行时间点 */
	EXEC_TIMES: string,
	/** 毒精麻使用标志 */
	PSY_USE_FLAG: string,
	TEMPORARY_ORDER_FLAG: string,
	PRT_NAME: string,
	OTHER_CODE1: string,
	OTHER_CODE2: string,
	OTHER_CODE3: string,
}

export interface IDrugAreaList {
	FORM_CODE: string,
	FORM_NAME: string,
	FORM_CLASS: string,
	DEL_FLAG: string,
	PINYIN: string,
	CREATE_DATE: string,
	CREATE_EMPE: string,
	UPDATE_DATE: string,
	UPDATE_EMPE: string
}

export interface IDrugDosage {
	id: string
	/** 药品剂型ID */
	FORM_CODE: string,
	/** 药品剂型名称 */
	FORM_NAME: string,
	/** 剂型等级（0 剂型分类，1剂型） */
	FORM_CLASS: string,
	/** 删除标记    ‘0’ 有效 */
	DEL_FLAG: string,
	/** 拼音码 */
	PINYIN: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string,
}

export interface IApprnoType {
	/** 批准文号类型CODE */
	APPRNO_TYPE_CODE: string,
	/** 批准文号类型名称 */
	APPRNO_TYPE_NAME: string,
	/** 拼音码 */
	PINYIN: string,
	/** 删除标志 */
	DEL_FLAG: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string
}

/** 药品属性（类型）出参 */
export interface IDrugProperty {
	/** 属性等级（1 类型，2 药品分类码，3 剂型，4药品性质分类，5 高危药品标志，6生产厂家） */
	PROPERTY_CLASS: string,
	/** 属性等级名称（类型，药品分类码，剂型，药品性质分类，高危药品标志，生产厂家） */
	PROPERTY_CLASS_NAME: string,
	/** 属性值（例如，10 西药，20 中成药，30 草药，31 颗粒剂，40 血制品，50 材料） */
	PROPERTY_CODE: string,
	/** 属性值名称（例如，西药，中成药，草药，颗粒剂，血制品，材料） */
	PROPERTY_NAME: string,
	/** 属性长度 */
	PROPERTY_LENGHT: string,
	/** 删除标志 */
	DEL_FLAG: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 更新时间 */
	UPDATE_DATE: string,
	/** 更新人 */
	UPDATE_EMPE: string
}


export interface IDrugForMulation {
	/** 药品剂型名称 */
	FORM_NAME: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string,
	/** 父类型 */
	FLX: string,
	/** 拼音码 */
	PINYIN: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 药品剂型code */
	FORM_CODE: string,
	/** 删除标志 */
	DEL_FLAG: string,
	/** 剂型等级（0 剂型分类，1剂型） */
	FORM_CLASS: string,
}

export interface IDepotype {
	/**库房类型id */
	KFLX_ID: string,
	/**库房类型名称 */
	KFLX_MC: string,
	/**拼音码 */
	PYM: string,
	/**自定义码 */
	ZDYM: string,
	/**删除标志 */
	DEL_FLAG: string,
	/**创建时间 */
	CJSJ: string,
	/**创建人 */
	CJR: string,
	/**最后更新时间 */
	ZHGXSJ: string,
	/**最后更新人 */
	ZHGXR: string,
	/**库房对应功能 */
	KFDYGN: string
}

export interface IDrugBase {
	/**基本药物类型CODE */
	BASIC_TYPE_CODE: string,
	/**基本药物类型名称 */
	BASIC_TYPE_NAME: string,
	/**类型 */
	SORT: string,
	/**删除标志 */
	DEL_FLAG: string,
	/**拼音码 */
	PINYIN: string,
	/**创建时间 */
	CREATE_DATE: string,
	/**创建人 */
	CREATE_EMPE: string,
	/**最后更新时间 */
	UPDATE_DATE: string,
	/**最后更新人 */
	UPDATE_EMPE: string,
	/**外部代码1 */
	ORTHER_CODE1: string,
	/**外部代码2 */
	ORTHER_CODE2: string,
	/**外部代码3 */
	ORTHER_CODE3: string
}

export interface IDepotInfo {
	/** 库房ID */
	DEPOT_CODE: string,
	/** 库房名称 */
	DEPOT_NAME: string,
	/** 库房所属科室 */
	DEPOT_DEPART: string,
	/** 库房类型 1药库   2 门诊药房  3病区药房 */
	TYPE: string,
	/** 出库方式   0 扣减库存(先进先出) 1 不扣库存 */
	EX_DEPOT_TYPE: string,
	/** 删除标志 */
	DEL_FLAG: string,
	/** 拼音码 */
	PINYIN: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string,
	/** 上一级库房id */
	PARENT_DEPOT_CODE: string,
	/** 分院编码 */
	HOSPITAL_CODE: string
	/** 管理药品 */
	DRUG_MANAGEMENT: string
	/** 发药对象 */
	DISPENSE_OBJECT: string
}


/** 批准文号字典出参 */
export interface IApprovalNumber {
	/** 批准文号类型CODE */
	APPRNO_TYPE_CODE: string,
	/** 批准文号类型名称 */
	APPRNO_TYPE_NAME: string,
	/** 拼音码 */
	PINYIN: string,
	/** 删除标志 */
	DEL_FLAG: string,
	/** 创建时间 */
	CREATE_DATE: string,
	/** 创建人 */
	CREATE_EMPE: string,
	/** 最后更新时间 */
	UPDATE_DATE: string,
	/** 最后更新人 */
	UPDATE_EMPE: string,
}


export interface IQueryDispensType {
	/** ID */
	dict_code: string,
	/** 名称 */
	dict_name: string,
	/** 类型id */
	dict_type: string,
	/** 类型名称 */
	dict_desc: string,
	/** 拼音码 */
	pinyin: string,
	/** 创建时间 */
	cjsj: string,
	/** 创建人 */
	cjr: string,
	/** 最后更新时间 */
	zhgxsj: string,
	/** 最后更新人 */
	zhgxr: string,
	/** 排序码 */
	sortno: string,
	/** 删除标志 */
	del_flag: string,
	/** 默认值 */
	def_flag: string
}