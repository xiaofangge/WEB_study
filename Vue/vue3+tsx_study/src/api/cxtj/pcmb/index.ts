import request from "~/src/core/request";
import { IPcmb, IPcmbmx, IPcmx, IYpck } from "./type";


/** 盘存模版查询 */
export function getDrugCwTemplate(query?: {}) {
  return request<IPcmb[]>({
    url: '/ld/common/dict/inventoryTemplate?method=getDrugCwTemplate',
    method: 'post',
    data: {
      ...query
    }
  })
}

/** 药品仓位查询 */
export function getInventoryTemplate(query?: {}) {
    return request<IYpck[]>({
      url: '/ld/common/dict/inventoryTemplate?method=getInventoryTemplate',
      method: 'post',
      data: {
        ...query
      }
    })
  }

  /** 盘存模版-新增 */
export function saveDrugCwTemplate(query?: {}) {
    return request<any>({
      url: '/ld/common/dict/inventoryTemplate?method=saveDrugCwTemplate',
      method: 'post',
      data: {
        ...query
      }
    })
  }

    /** 盘存模版-修改 */
export function modifyDrugCwTemplate(query?: {}) {
    return request<any>({
      url: '/ld/common/dict/inventoryTemplate?method=modifyDrugCwTemplate',
      method: 'post',
      data: {
        ...query
      }
    })
  }

      /** 盘存模版-删除 */
export function delDrugCwTemplate(query?: {}) {
    return request<any>({
      url: '/ld/common/dict/inventoryTemplate?method=delDrugCwTemplate',
      method: 'post',
      data: {
        ...query
      }
    })
  }

/** 盘存模版明细查询 */
export function getDrugCwTemplateDetail(query?: {}) {
    return request<IPcmbmx[]>({
      url: '/ld/common/dict/inventoryTemplate?method=getDrugCwTemplateDetail',
      method: 'post',
      data: {
        ...query
      }
    })
  }

/** 盘存模版明细-新增 */
export function saveDrugCwTemplateDetail(query?: {}) {
    return request<any>({
      url: '/ld/common/dict/inventoryTemplate?method=saveDrugCwTemplateDetail',
      method: 'post',
      data: {
        ...query
      }
    })
  }


  /** 盘存模版明细-修改 */
export function modifyDrugCwTemplateDetail(query?: {}) {
    return request<any>({
      url: '/ld/common/dict/inventoryTemplate?method=modifyDrugCwTemplateDetail',
      method: 'post',
      data: {
        ...query
      }
    })
  }

/** 盘存模版明细-删除 */
export function deleteDrugCwTemplateDetail(query?: {}) {
  return request<any>({
    url: '/ld/common/dict/inventoryTemplate?method=deleteDrugCwTemplateDetail',
    method: 'post',
    data: {
      ...query
    }
  })
}


    /** 盘存模版明细-删除 */
export function delDrugCwTemplateDetail(query?: {}) {
    return request<any>({
      url: '/ld/common/dict/inventoryTemplate?method=delDrugCwTemplateDetail',
      method: 'post',
      data: {
        ...query
      }
    })
  }
    /** 盘存模版明细-删除 */
    export function getInventoryByModel(query?: {}) {
      return request<IPcmx[]>({
        url: '/ld/common/dict/inventdepot?method=getInventoryByModel',
        method: 'post',
        data: {
          ...query
        }
      })
    }
