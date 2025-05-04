export interface Icrkcriteria{
    begindate:string,
    enddate:string,
    kfid:string,
    lx:string
}
/**药品养护记录 */
export interface IDRUGYHJL {
    /** 规格 */
    GG: string,
    /** 入库日期 */
    RK_RQ: string,
    /** 失效日期 */
    SX_RQ: string,
    /** 药品养护ID */
    YPYH_ID: string,
    /** 处理意见 */
    CLYJ: string,
    /** 质量情况 */
    ZLQK: string,
    /** 药品ID */
    YP_ID: string,
    /** 入库记录ID */
    RKJL_ID: string,
    /** 养护时间 */
    YHSJ: string,
    /** 质量描述 */
    ZLMS: string,
    /** 生产厂家每次 */
    SCCJ_MC: string,
    /** 实际库存 */
    SJ_KC: number,
    /** 药品名称 */
    YP_MC: string,
    /** 药品产地id */
    YP_CD_ID: string,
    /** 库房名称 */
    KF_MC: string,
    /** 备注 */
    BZ: string,
    /** 库房ID */
    KF_ID: string,
    /** 药品类型 */
    YP_LX: string
}
/**盘存单查询 */
export interface Idrugckpc {
    /** 规格 */
    GG: string,
    /** 拼音码 */
    PYM: string,
    /** 零售金额 */
    LS_JE: number,
    /** 药品id */
    YP_ID: string,
    /** 进货金额 */
    JH_JE: number,
    /** 零售单价 */
    LS_DJ: number,
    /** 单位名称 */
    DWMC: string,
    /** 生产厂家名称 */
    SCCJ_MC: string,
    /** 进货单价 */
    JH_DJ: number,
    /** 批次 */
    PC: string,
    /** 实际库存 */
    SJ_KC: number,
    /** 药品名称 */
    YP_MC: string,
    /** 库房名称 */
    KF_MC: string
}
/**药房月报表 */
export interface Idrugybb {
    /** 类型名称 */
    LX_MC: string,
    /** 零售金额 */
    LS_JE: number,
    /** 进货金额 */
    JH_JE: number,
    /** 进零差价 */
    JLCJ: number,
    /** 批发金额 */
    PF_JE: number,
    /** 类型(排序用) */
    LX: string
}

/**药品仓位查询 */
export interface Idrugcwcx {
    /** 库房库存 */
    KF_KC: string,
    /** 规格 */
    GG: string,
    /** 生产厂家名称 */
    SCCJ_MC: string,
    /** 药品名称 */
    YP_MC: string,
    /** 仓位号 */
    CWH: string,
    /** 拼音码 */
    PYM: string,
    /** 药品id */
    YP_ID: string,
    /** 产地id */
    CD_ID: string,
    /** 库房id */
    KF_ID: string,
    /** 仓位类型 */
    CW_LX: string,
}
/**麻醉卡信息 */
export interface Imzkcx {
    /** 创建时间 */
    CJSJ: string,
    /** 发卡医疗机构ID */
    FKJG: string,
    /** 供应医疗机构ID */
    GYJG_ID: string,
    /** 最后更新人 */
    ZHGXR: string,
    /** 麻醉卡记录ID */
    MZKJL_ID: string,
    /** 填发卡人ID */
    TFKR_ID: string,
    /** 身份证号 */
    SFZH: string,
    /** 患者主索引 */
    PAT_ID: string,
    /** 创建人 */
    CJR: string,
    /** 性别 */
    XB: string,
    /** 填发日期 */
    TF_RQ: string,
    /** 结束使用日期 */
    JS_RQ: string,
    /** 麻醉卡号 */
    MZKH: string,
    /** 病人姓名 */
    PAT_NAME: string,
    /** 就诊卡号 */
    JZKH: string,
    /** 诊断书号 */
    ZDSH: string,
    /** 最后更新时间 */
    ZHGXSJ: string,
    /** 诊断机构id */
    ZDJG_ID: string,
    /** 备注 */
    REMARK: string,
    /** 开始日期 */
    KS_RQ: string,
    /** 年龄 */
    NL: string,
    /** 领药人身份证号 */
    LYRSFZ: string
}

/**入库-供应商/部门 */
export interface Irkghdw {
    /** 零售金额 */
    LSJE: number,
    /** 供货单位id */
    GHDW: string,
    /** 拼音码 */
    PYM: string,
    /** 供货单位名称 */
    GHDWMC: string,
    /** 差价 */
    CJ: number,
    /** 数量 */
    SL: number,
    /** 进货金额 */
    JHJE: number
}
/**入库-供应商/部门明细 */
export interface Irkghdwmx {
    /** 规格 */
    GG: string,
    /** 生产厂家 */
    SCCJ: string,
    /** 零售金额 */
    LSJE: number,
    /** 入库类型 */
    RKLX: string,
    /** 药品名称 */
    YP_MC: string,
    /** 差价 */
    CJ: number,
    /** 数量 */
    SL: number,
    /** 单位名称 */
    DWMC: string,
    /** 药品类型 */
    YPLX: string,
    /** 进货金额 */
    JHJE: number
}
/**入库-药品查询 */
export interface Irkyp {
    /** 规格 */
    GG: string,
    /** 生产厂家 */
    SCCJ: string,
    /** 零售金额 */
    LSJE: number,
    /** 入库类型 */
    RKLX: string,
    /** 产地id */
    CDID: string,
    /** 药品名称 */
    YP_MC: string,
    /** 差价 */
    CJ: number,
    /** 数量 */
    SL: number,
    /** 单位名称 */
    DWMC: string,
    /** 药品类型 */
    YPLX: string,
    /** 进货金额 */
    JHJE: number,
    /** 药品id */
    YPID: string
}
/**入库-药品查询对应单据 */
export interface Irkypmx {
    /** 零售金额 */
    LSJE: number,
    /** 供货单位 */
    GHDW: string,
    /** 拼音码 */
    PYM: string,
    /** 差价 */
    CJ: number,
    /** 数量 */
    SL: number,
    /** 进货金额 */
    JHJE: number,
    /** 入库日期 */
    RKRQ: string
}
/**出库查询汇总  */
export interface Ickhz {
    /** 零售金额 */
    LSJE: number,
    /** 差价 */
    CJ: number,
    /** 出库方式 */
    CKFS: string,
    /** 进货金额 */
    JHJE: number,
    /** 条数 */
    TS: number
}

/**药房流水账查询 */
export interface Iyflsz {
    /** 规格 */
    GG: string,
    /** 库房名称 */
    DEPOT_NAME: string,
    /** 记录日期 */
    JLRQ: string,
    /** 领用数量 */
    LYSL: number,
    /** 拼音码 */
    PYM: string,
    /** 药品ID */
    YP_ID: string,
    /** 产地ID */
    CD_ID: string,
    /** 发药数量 */
    FYSL: number,
    /** 期初库存 */
    QCKC: number,
    /** 期末库存 */
    QMKC: number,
    /** 盈亏数量 */
    YKSY: number,
    /** 生成厂家名称 */
    SSCJ_MC: string,
    /** 药品名称 */
    YP_MC: string,
    /** 库房ID */
    KF_ID: string,
    /** 出库数量 */
    CKSL: number
}