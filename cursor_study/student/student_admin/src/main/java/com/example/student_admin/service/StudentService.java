package com.example.student_admin.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.example.student_admin.entity.Student;

/**
 * 学生服务接口
 */
public interface StudentService extends IService<Student> {

    /**
     * 分页查询学生列表
     *
     * @param page      分页对象
     * @param student   查询条件
     * @return          分页结果
     */
    IPage<Student> pageList(IPage<Student> page, Student student);

    /**
     * 根据ID获取学生信息
     *
     * @param id 学生ID
     * @return 学生信息
     */
    Student getStudentById(Long id);

    /**
     * 根据学号获取学生信息
     *
     * @param studentNo 学号
     * @return 学生信息
     */
    Student getStudentByStudentNo(String studentNo);

    /**
     * 新增学生
     *
     * @param student 学生信息
     * @return 是否成功
     */
    boolean addStudent(Student student);

    /**
     * 修改学生信息
     *
     * @param student 学生信息
     * @return 是否成功
     */
    boolean updateStudent(Student student);

    /**
     * 删除学生
     *
     * @param id 学生ID
     * @return 是否成功
     */
    boolean deleteStudent(Long id);

    /**
     * 批量删除学生
     *
     * @param ids 学生ID数组
     * @return 是否成功
     */
    boolean batchDeleteStudent(Long[] ids);
} 