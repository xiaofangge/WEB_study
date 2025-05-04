import request from '@/utils/request'

// 获取操作日志分页列表
export function logList(query) {
  return request({
    url: '/monitor/operlog/list',
    method: 'get',
    params: query
  })
}

// 批量删除日志接口
export function deleteLog(logId) {
  return request({
    url: '/monitor/operlog/' + logId,
    method: 'delete'
  })
}
