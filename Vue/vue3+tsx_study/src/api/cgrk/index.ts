import request from "@/core/request";
import { GetQldepotByhlStorage, IBatch, IDrugInfoListForQldepot, IForIndepot, IForOutdepotDetailByPc, IInoutDepot, IInvertorys, ILostList, InsetDepotOut, IOrderItem, IOutdepot, IOutDepotListAccount, IZeroData } from "./type";

const del_json = {
	"druginfo": {
		"DEL_FLAG": "0"
	}
}

/** 保存入库单 */
export function saveInoutdepot(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/druginoutdepot?method=saveInoutdepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 保存入库单 - 出库专用 */
export function saveOutdepot(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/inoutdepot?method=saveOutdepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}


/** 请领单保存 */
export function saveQldepot(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/InoutPharmacyWork?method=saveQldepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 按高低储获取请领单数据 */
export function getQldepotByhlStorage(query?: {}) {
	return request<GetQldepotByhlStorage[]>({
		url: '/ld/common/dict/inoutdepot?method=getQldepotByhlStorage',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 保存采购退货单据 */
export function saveInTkdepot(query?: {}){
	return request<"">({
		url: '/ld/common/dict/druginoutdepot?method=saveInTkdepot',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 审核采购退货单据 */
export function auditTkdepot(query?: {}){
	return request<"">({
		url: '/ld/common/dict/druginoutdepot?method=auditTkdepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 采购退货单确认 */
export function configTkdepot(query?: {}){
	return request<"">({
		url: '/ld/common/dict/druginoutdepot?method=configTkdepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 获取出库单列表 */
export function getInoutDepotList(query?: {}) {
	return request<IInoutDepot[]>({
		url: '/ld/common/dict/inoutdepot?method=getInoutDepotList',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 采购入库同发票号汇总功能 */
export function InvoiceSummary(query?: {}) {
	return request<any>({
		url: '/ld/common/dict/druginoutdepot?method=InvoiceSummary',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 一键出库 */
export function autoOutdepot(query?: {}) {
	return request<IOrderItem[]>({
		url: '/ld/common/dict/inoutdepart?method=autoOutdepot',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 获取出库单列表 */
export function getOutdepotLIstDetail(query?: {}) {
	return request<IOrderItem[]>({
		url: '/ld/common/dict/inoutdepot?method=getOutdepotLIstDetail',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}



/** 获取出库单 - 详情 */
export function getNewOutdepotLIstDetail(query?: {}) {
	return request<IOrderItem[]>({
		url: '/ld/common/dict/inoutdepot?method=getNewOutdepotLIstDetail',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 获取盈亏单-明细 */
export function getProfitDetail(query?: {}) {
	return request<IOrderItem[]>({
		url: '/ld/common/dict/inoutdepot?method=getProfitDetail',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 根据单号获取盘存出库单 - 汇总 */
export function getNewOutdepotLIstAcount(query?: {}) {
	return request<IOutDepotListAccount[]>({
		url: '/ld/common/dict/inoutdepot?method=getNewOutdepotLIstAcount',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}


/** 0库存数据生成新出库单导入数据*/
export function getZeroData(query?: {}) {
	return request<IZeroData[]>({
		url: '/ld/common/dict/inoutdepot?method=getZeroData',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 删除0库存单据信息 */
export function updateZeroData(query?: {}) {
	return request<any>({
		url: '/ld/common/dict/inoutdepot?method=updateZeroData',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 获取出库单 - 详情 - 用于请领单 */
export function getNewqlOutdepotListDetail(query?: {}) {
	return request<IOrderItem[]>({
		url: '/ld/common/dict/inoutdepot?method=getNewqlOutdepotListDetail',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}



/** 审核 - 入库 */
export function auditOutdepot(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/druginoutdepot?method=auditInoutdepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 审核 - 出库 */
export function auditOutdepotCk(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/inoutdepot?method=auditOutdepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 入库接收 */
export function confirmOutdepotYF(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/inoutdepot?method=confirmOutdepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 日常损益单保存修改 */
export function saveSydepot(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/InoutPharmacyWork?method=saveSydepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}


/** 审核请领单 */
export function auditdepotStatus(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/InoutPharmacyWork?method=auditdepotStatus',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 损益单确认 */
export function cofigSydepot(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/InoutPharmacyWork?method=cofigSydepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}


/** 审核 - 退库单 */
export function confirmOutdepot(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/inoutdepot?method=confirmOutdepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}



/** 出库确认 */
export function confirmInoutdepot(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/druginoutdepot?method=confirmInoutdepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 删除 */
export function updateInOutDepot(query?: {}) {
	return request<"">({
		url: '/ld/common/dict/inoutdepot?method=updateInOutDepot',
		method: 'post',
		data: {
			...del_json,
			...query
		}
	})
}

/** 根据拼音码获取药品列表 - 用于入库单 */
export function getDrugInfoListForIndepot(query?: any) {
	return request<IForIndepot[]>({
		url: '/ld/common/dict/druginoutdepot?method=getDrugInfoListForIndepot',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 根据拼音码获取药品列表 - 用于出库单 */
export function getDrugInfoListForOutdepot(query?: any) {
	return request<IOutdepot[]>({
		url: '/ld/common/dict/inoutdepot?method=getDrugInfoListForOutdepot',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 根据拼音码获取药品列表 - 用于出库单 */
export function getDrugInfoListForQldepot(query?: any) {
	return request<IDrugInfoListForQldepot[]>({
		url: '/ld/common/dict/InoutPharmacyWork?method=getDrugInfoListForQldepot',
		method: 'post',
		data: {
			...query
		}
	})
}



/** 根据拼音码获取药品批次 - 用于出库单 */
export function getDrugInfoListForOutdepotDetail(query?: any) {
	return request<IBatch[]>({
		url: '/ld/common/dict/inoutdepot?method=getDrugInfoListForOutdepotDetail',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 药品冻结禁用-库存明细 */
export function getDrugInfoListForOutdepotDetail2(query?: any) {
	return request<IBatch[]>({
		url: '/ld/common/dict/inoutdepot?method=getDrugInfoListForOutdepotDetail2',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 请领出库单列表 - 用于出库单 */
export function getqloutDepotList(query?: any) {
	return request<IForIndepot[]>({
		url: '/ld/common/dict/inoutdepot?method=getqloutDepotList',
		method: 'post',
		data: {
			...query
		}
	})
}


/** 根据请领单生成出库单 */
export function insetDepot(query?: any) {
	return request<InsetDepotOut[]>({
		url: '/ld/common/dict/inoutdepot?method=insetDepot',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 获取盘存单表头 */
export function getInvertorys(query?: any) {
	return request<IInvertorys[]>({
		url: '/ld/common/dict/inventdepot?method=getInvertorys',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 获取盘存单表头 */
export function getDrugInfoListForPcDetail(query?: any) {
	return request<IForOutdepotDetailByPc[]>({
		url: '/ld/common/dict/inventdepot?method=getDrugInfoListForPcDetail',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 生成初始盘存单 */
export function initInventory(query?: any) {
	return request<string>({
		url: '/ld/common/dict/inventdepot?method=initInventory',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 生成初始盘存单 */
export function getInvertoryDetail(query?: any) {
	return request<any[]>({
		url: '/ld/common/dict/inventdepot?method=getInvertoryDetail',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 修改盘存单数量 */
export function batchUpdateInvertoryDetail(query?: any) {
	return request<string>({
		url: '/ld/common/dict/inventdepot?method=batchUpdateInvertoryDetail',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 盘存单审核 */
export function auditInvertory(query?: any) {
	return request<string>({
		url: '/ld/common/dict/inventdepot?method=auditInvertory',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 预览盈亏单 */
export function invertoryLostList(query?: any) {
	return request<ILostList[]>({
		url: '/ld/common/dict/inventdepot?method=invertoryLostList',
		method: 'post',
		data: {
			...query
		},
		// cancelToken: new axios.CancelToken(function executor(cancel) {
		// 	// executor 函数接收一个 cancel 函数作为参数
		// 	console.log("调用:",cancel);
		// 	cancel()
		// })
	})
}




/** 删除盘存单 */
export function delInvertory(query?: any) {
	return request<string>({
		url: '/ld/common/dict/inventdepot?method=delInvertory',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 新增盘存单 */
export function insertInvertory(query?: any) {
	return request<string>({
		url: '/ld/common/dict/inventdepot?method=insertInvertory',
		method: 'post',
		data: {
			...query
		}
	})
}

/** 盈亏制单 */
export function buildInventoryLostdepot(query?: any) {
	return request<string>({
		url: '/ld/common/dict/inventdepot?method=buildInventoryLostdepot',
		method: 'post',
		data: {
			...query
		}
	})
}


/** 盈亏制单 */
export function insertCollectInventory(query?: any) {
	return request<any>({
		url: '/ld/common/v1/inventdepot?method=insertCollectInventory',
		method: 'post',
		data: {
			...query
		}
	})
}



