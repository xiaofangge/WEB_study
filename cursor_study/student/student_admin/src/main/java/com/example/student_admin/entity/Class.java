package com.example.student_admin.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 班级实体类
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("class")
public class Class extends BaseEntity {

    /**
     * 班级名称
     */
    private String className;

    /**
     * 年级
     */
    private String grade;

    /**
     * 院系ID
     */
    private Long departmentId;

    /**
     * 班主任
     */
    private String headTeacher;

    /**
     * 教室
     */
    private String classroom;

    /**
     * 院系名称（非数据库字段）
     */
    @TableField(exist = false)
    private String departmentName;

    /**
     * 学生数量（非数据库字段）
     */
    @TableField(exist = false)
    private Integer studentCount;
} 