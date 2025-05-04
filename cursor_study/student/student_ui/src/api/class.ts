import request from '@/utils/request'

// 查询班级列表
export function getClassList(params?: any) {
  return request({
    url: '/class/list',
    method: 'get',
    params
  })
}

// 分页查询班级列表
export function getClassPage(params: any) {
  return request({
    url: '/class/page',
    method: 'get',
    params
  })
}

// 查询班级详情
export function getClassById(id: string | number) {
  return request({
    url: `/class/${id}`,
    method: 'get'
  })
} 