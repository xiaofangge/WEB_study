package com.example.student_admin.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.math.BigDecimal;
import java.util.Date;

/**
 * 成绩实体类
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("score")
public class Score extends BaseEntity {

    /**
     * 学生ID
     */
    private Long studentId;

    /**
     * 课程ID
     */
    private Long courseId;

    /**
     * 分数
     */
    private BigDecimal score;

    /**
     * 考试时间
     */
    private Date examTime;

    /**
     * 学期，如2023-2024-1表示2023-2024学年第一学期
     */
    private String semester;

    /**
     * 备注
     */
    private String remark;

    /**
     * 学生姓名（非数据库字段）
     */
    @TableField(exist = false)
    private String studentName;

    /**
     * 学号（非数据库字段）
     */
    @TableField(exist = false)
    private String studentNo;

    /**
     * 课程名称（非数据库字段）
     */
    @TableField(exist = false)
    private String courseName;

    /**
     * 课程编号（非数据库字段）
     */
    @TableField(exist = false)
    private String courseNo;
} 