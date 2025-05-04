package com.example.student_admin.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.student_admin.entity.Class;
import org.apache.ibatis.annotations.Mapper;

/**
 * 班级Mapper接口
 */
@Mapper
public interface ClassMapper extends BaseMapper<Class> {
    // 可以在这里添加自定义的SQL操作方法
} 