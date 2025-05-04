package com.example.student_admin.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.student_admin.entity.Student;
import com.example.student_admin.mapper.StudentMapper;
import com.example.student_admin.service.StudentService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.Arrays;

/**
 * 学生服务实现类
 */
@Service
public class StudentServiceImpl extends ServiceImpl<StudentMapper, Student> implements StudentService {

    @Override
    public IPage<Student> pageList(IPage<Student> page, Student student) {
        LambdaQueryWrapper<Student> queryWrapper = new LambdaQueryWrapper<>();
        
        // 条件查询
        if (student != null) {
            // 学号
            if (StringUtils.hasText(student.getStudentNo())) {
                queryWrapper.like(Student::getStudentNo, student.getStudentNo());
            }
            
            // 姓名
            if (StringUtils.hasText(student.getName())) {
                queryWrapper.like(Student::getName, student.getName());
            }
            
            // 性别
            if (student.getGender() != null) {
                queryWrapper.eq(Student::getGender, student.getGender());
            }
            
            // 班级ID
            if (student.getClassId() != null) {
                queryWrapper.eq(Student::getClassId, student.getClassId());
            }
            
            // 状态
            if (student.getStatus() != null) {
                queryWrapper.eq(Student::getStatus, student.getStatus());
            }
        }
        
        // 按学号排序
        queryWrapper.orderByAsc(Student::getStudentNo);
        
        return this.page(page, queryWrapper);
    }

    @Override
    public Student getStudentById(Long id) {
        return this.getById(id);
    }

    @Override
    public Student getStudentByStudentNo(String studentNo) {
        if (!StringUtils.hasText(studentNo)) {
            return null;
        }
        
        LambdaQueryWrapper<Student> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Student::getStudentNo, studentNo);
        
        return this.getOne(queryWrapper);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean addStudent(Student student) {
        // 检查学号是否已存在
        Student existStudent = this.getStudentByStudentNo(student.getStudentNo());
        if (existStudent != null) {
            throw new RuntimeException("学号已存在");
        }
        
        return this.save(student);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean updateStudent(Student student) {
        // 检查学号是否已存在（排除当前学生）
        LambdaQueryWrapper<Student> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Student::getStudentNo, student.getStudentNo())
                .ne(Student::getId, student.getId());
        
        Student existStudent = this.getOne(queryWrapper);
        if (existStudent != null) {
            throw new RuntimeException("学号已存在");
        }
        
        return this.updateById(student);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean deleteStudent(Long id) {
        return this.removeById(id);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public boolean batchDeleteStudent(Long[] ids) {
        return this.removeByIds(Arrays.asList(ids));
    }
}