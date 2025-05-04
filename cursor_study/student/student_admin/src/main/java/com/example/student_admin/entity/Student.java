package com.example.student_admin.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 学生实体类
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("student")
public class Student extends BaseEntity {

    /**
     * 学号
     */
    private String studentNo;

    /**
     * 姓名
     */
    private String name;

    /**
     * 性别，1-男，2-女
     */
    private Integer gender;

    /**
     * 年龄
     */
    private Integer age;

    /**
     * 身份证号
     */
    private String idCard;

    /**
     * 手机号
     */
    private String phone;

    /**
     * 邮箱
     */
    private String email;

    /**
     * 地址
     */
    private String address;

    /**
     * 班级ID
     */
    private Long classId;

    /**
     * 入学年份
     */
    private Integer gradeYear;

    /**
     * 状态，1-在读，2-休学，3-毕业，4-退学
     */
    private Integer status;

    /**
     * 头像URL
     */
    private String avatar;

    /**
     * 班级名称（非数据库字段）
     */
    @TableField(exist = false)
    private String className;
} 