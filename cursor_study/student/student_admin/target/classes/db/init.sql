-- 创建学生管理系统数据库
CREATE DATABASE IF NOT EXISTS student_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE student_db;

-- 学生表
CREATE TABLE IF NOT EXISTS `student` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `student_no` varchar(20) NOT NULL COMMENT '学号',
  `name` varchar(50) NOT NULL COMMENT '姓名',
  `gender` tinyint(1) NOT NULL DEFAULT '1' COMMENT '性别，1-男，2-女',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `id_card` varchar(18) DEFAULT NULL COMMENT '身份证号',
  `phone` varchar(11) DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `address` varchar(255) DEFAULT NULL COMMENT '地址',
  `class_id` bigint(20) DEFAULT NULL COMMENT '班级ID',
  `grade_year` int(11) DEFAULT NULL COMMENT '入学年份',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态，1-在读，2-休学，3-毕业，4-退学',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像URL',
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除，0-未删除，1-已删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_student_no` (`student_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='学生表';

-- 班级表
CREATE TABLE IF NOT EXISTS `class` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `class_name` varchar(50) NOT NULL COMMENT '班级名称',
  `grade` varchar(10) NOT NULL COMMENT '年级',
  `department_id` bigint(20) DEFAULT NULL COMMENT '院系ID',
  `head_teacher` varchar(50) DEFAULT NULL COMMENT '班主任',
  `classroom` varchar(50) DEFAULT NULL COMMENT '教室',
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除，0-未删除，1-已删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='班级表';

-- 院系表
CREATE TABLE IF NOT EXISTS `department` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `dept_name` varchar(50) NOT NULL COMMENT '院系名称',
  `description` varchar(200) DEFAULT NULL COMMENT '描述',
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除，0-未删除，1-已删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_dept_name` (`dept_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='院系表';

-- 课程表
CREATE TABLE IF NOT EXISTS `course` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `course_no` varchar(20) NOT NULL COMMENT '课程编号',
  `course_name` varchar(50) NOT NULL COMMENT '课程名称',
  `credit` decimal(3,1) NOT NULL COMMENT '学分',
  `period` int(11) NOT NULL COMMENT '学时',
  `teacher_id` bigint(20) DEFAULT NULL COMMENT '教师ID',
  `department_id` bigint(20) DEFAULT NULL COMMENT '院系ID',
  `course_type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '课程类型，1-必修，2-选修',
  `description` varchar(500) DEFAULT NULL COMMENT '课程描述',
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除，0-未删除，1-已删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_course_no` (`course_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='课程表';

-- 教师表
CREATE TABLE IF NOT EXISTS `teacher` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `teacher_no` varchar(20) NOT NULL COMMENT '教师编号',
  `name` varchar(50) NOT NULL COMMENT '姓名',
  `gender` tinyint(1) NOT NULL DEFAULT '1' COMMENT '性别，1-男，2-女',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `id_card` varchar(18) DEFAULT NULL COMMENT '身份证号',
  `phone` varchar(11) DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `department_id` bigint(20) DEFAULT NULL COMMENT '院系ID',
  `position` varchar(50) DEFAULT NULL COMMENT '职称/职位',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态，1-在职，2-离职',
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除，0-未删除，1-已删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_teacher_no` (`teacher_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='教师表';

-- 成绩表
CREATE TABLE IF NOT EXISTS `score` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `student_id` bigint(20) NOT NULL COMMENT '学生ID',
  `course_id` bigint(20) NOT NULL COMMENT '课程ID',
  `score` decimal(5,2) DEFAULT NULL COMMENT '分数',
  `exam_time` datetime DEFAULT NULL COMMENT '考试时间',
  `semester` varchar(20) NOT NULL COMMENT '学期，如2023-2024-1表示2023-2024学年第一学期',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除，0-未删除，1-已删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_student_course_semester` (`student_id`,`course_id`,`semester`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='成绩表';

-- 考勤表
CREATE TABLE IF NOT EXISTS `attendance` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `student_id` bigint(20) NOT NULL COMMENT '学生ID',
  `course_id` bigint(20) NOT NULL COMMENT '课程ID',
  `attendance_date` date NOT NULL COMMENT '考勤日期',
  `attendance_time` time NOT NULL COMMENT '考勤时间',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态，1-出勤，2-迟到，3-早退，4-旷课，5-请假',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除，0-未删除，1-已删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='考勤表';

-- 用户表
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `salt` varchar(32) DEFAULT NULL COMMENT '盐值',
  `real_name` varchar(50) DEFAULT NULL COMMENT '真实姓名',
  `phone` varchar(11) DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像URL',
  `role` tinyint(1) NOT NULL DEFAULT '1' COMMENT '角色，1-管理员，2-教师，3-学生',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态，1-启用，0-禁用',
  `last_login_time` datetime DEFAULT NULL COMMENT '最后登录时间',
  `last_login_ip` varchar(50) DEFAULT NULL COMMENT '最后登录IP',
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除，0-未删除，1-已删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

-- 插入默认管理员用户，密码为123456（需要实际开发中进行加密）
INSERT INTO `user` (`username`, `password`, `real_name`, `role`) VALUES ('admin', '123456', '系统管理员', 1);

-- 插入示例院系数据
INSERT INTO `department` (`dept_name`, `description`) VALUES 
('计算机科学与技术学院', '计算机科学与工程相关专业'),
('电子信息工程学院', '电子信息工程相关专业'),
('人工智能学院', '人工智能与数据科学相关专业'),
('数学与统计学院', '数学和统计相关专业');

-- 插入示例班级数据
INSERT INTO `class` (`class_name`, `grade`, `department_id`, `head_teacher`, `classroom`) VALUES 
('计算机科学1班', '2023级', 1, '张三', 'A301'),
('计算机科学2班', '2023级', 1, '李四', 'A302'),
('电子信息1班', '2023级', 2, '王五', 'B201'),
('人工智能1班', '2023级', 3, '赵六', 'C101');

-- 插入示例教师数据
INSERT INTO `teacher` (`teacher_no`, `name`, `gender`, `age`, `phone`, `email`, `department_id`, `position`) VALUES 
('T2023001', '张三', 1, 35, '13800138001', 'zhangsan@example.com', 1, '教授'),
('T2023002', '李四', 1, 42, '13800138002', 'lisi@example.com', 1, '副教授'),
('T2023003', '王五', 1, 38, '13800138003', 'wangwu@example.com', 2, '讲师'),
('T2023004', '赵六', 2, 45, '13800138004', 'zhaoliu@example.com', 3, '教授');

-- 插入示例课程数据
INSERT INTO `course` (`course_no`, `course_name`, `credit`, `period`, `teacher_id`, `department_id`, `course_type`, `description`) VALUES 
('CS1001', '计算机导论', 3.0, 48, 1, 1, 1, '计算机基础知识介绍'),
('CS1002', 'C语言程序设计', 4.0, 64, 2, 1, 1, 'C语言基础教程'),
('EE1001', '电路原理', 3.5, 56, 3, 2, 1, '电路基础知识'),
('AI1001', '人工智能导论', 3.0, 48, 4, 3, 2, '人工智能基础概念');

-- 插入示例学生数据
INSERT INTO `student` (`student_no`, `name`, `gender`, `age`, `phone`, `email`, `class_id`, `grade_year`, `status`) VALUES 
('S202301001', '小明', 1, 18, '13900139001', 'xiaoming@example.com', 1, 2023, 1),
('S202301002', '小红', 2, 19, '13900139002', 'xiaohong@example.com', 1, 2023, 1),
('S202301003', '小刚', 1, 20, '13900139003', 'xiaogang@example.com', 2, 2023, 1),
('S202301004', '小丽', 2, 18, '13900139004', 'xiaoli@example.com', 3, 2023, 1),
('S202301005', '小华', 1, 19, '13900139005', 'xiaohua@example.com', 4, 2023, 1);

-- 插入示例成绩数据
INSERT INTO `score` (`student_id`, `course_id`, `score`, `exam_time`, `semester`) VALUES 
(1, 1, 85.5, '2023-12-20 09:00:00', '2023-2024-1'),
(1, 2, 92.0, '2023-12-22 09:00:00', '2023-2024-1'),
(2, 1, 78.5, '2023-12-20 09:00:00', '2023-2024-1'),
(2, 2, 88.0, '2023-12-22 09:00:00', '2023-2024-1'),
(3, 3, 76.0, '2023-12-24 09:00:00', '2023-2024-1'),
(4, 4, 91.5, '2023-12-26 09:00:00', '2023-2024-1'),
(5, 4, 84.0, '2023-12-26 09:00:00', '2023-2024-1'); 