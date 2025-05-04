package com.example.student_admin.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;

/**
 * 课程实体类
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("course")
public class Course extends BaseEntity {

    /**
     * 课程编号
     */
    private String courseNo;

    /**
     * 课程名称
     */
    private String courseName;

    /**
     * 学分
     */
    private BigDecimal credit;

    /**
     * 学时
     */
    private Integer period;

    /**
     * 教师ID
     */
    private Long teacherId;

    /**
     * 院系ID
     */
    private Long departmentId;

    /**
     * 课程类型，1-必修，2-选修
     */
    private Integer courseType;

    /**
     * 课程描述
     */
    private String description;

    /**
     * 教师姓名（非数据库字段）
     */
    @TableField(exist = false)
    private String teacherName;

    /**
     * 院系名称（非数据库字段）
     */
    @TableField(exist = false)
    private String departmentName;
} 