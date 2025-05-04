package com.example.student_admin.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.student_admin.entity.Student;
import org.apache.ibatis.annotations.Mapper;

/**
 * 学生Mapper接口
 */
@Mapper
public interface StudentMapper extends BaseMapper<Student> {
    // 可以在这里添加自定义的SQL操作方法
} 