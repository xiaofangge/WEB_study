import request from '@/utils/request'

// 分页查询学生列表
export function getStudentList(params: any) {
  return request({
    url: '/student/page',
    method: 'get',
    params
  })
}

// 查询学生详情
export function getStudentById(id: string | number) {
  return request({
    url: `/student/${id}`,
    method: 'get'
  })
}

// 根据学号查询学生
export function getStudentByStudentNo(studentNo: string) {
  return request({
    url: `/student/no/${studentNo}`,
    method: 'get'
  })
}

// 新增学生
export function addStudent(data: any) {
  return request({
    url: '/student',
    method: 'post',
    data
  })
}

// 修改学生
export function updateStudent(data: any) {
  return request({
    url: '/student',
    method: 'put',
    data
  })
}

// 删除学生
export function deleteStudent(id: string | number) {
  return request({
    url: `/student/${id}`,
    method: 'delete'
  })
}

// 批量删除学生
export function batchDeleteStudent(ids: Array<string | number>) {
  return request({
    url: '/student/batch',
    method: 'delete',
    data: ids
  })
} 