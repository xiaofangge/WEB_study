package com.example.student_admin.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.student_admin.common.Result;
import com.example.student_admin.entity.Student;
import com.example.student_admin.service.StudentService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * 学生控制器
 */
@Slf4j
@RestController
@RequestMapping("/student")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    /**
     * 分页查询学生列表
     */
    @GetMapping("/page")
    public Result<IPage<Student>> page(
            @RequestParam(defaultValue = "1") Integer pageNum,
            @RequestParam(defaultValue = "10") Integer pageSize,
            @RequestParam(required = false) String studentNo,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Long classId) {
        
        Page<Student> page = new Page<>(pageNum, pageSize);
        Student student = new Student();
        student.setStudentNo(studentNo);
        student.setName(name);
        student.setClassId(classId);
        
        IPage<Student> result = studentService.pageList(page, student);
        return Result.success(result);
    }

    /**
     * 根据ID查询学生
     */
    @GetMapping("/{id}")
    public Result<Student> getById(@PathVariable Long id) {
        Student student = studentService.getStudentById(id);
        return Result.success(student);
    }

    /**
     * 根据学号查询学生
     */
    @GetMapping("/no/{studentNo}")
    public Result<Student> getByStudentNo(@PathVariable String studentNo) {
        Student student = studentService.getStudentByStudentNo(studentNo);
        return Result.success(student);
    }

    /**
     * 新增学生
     */
    @PostMapping
    public Result<Boolean> save(@RequestBody Student student) {
        boolean result = studentService.addStudent(student);
        return Result.success(result);
    }

    /**
     * 更新学生
     */
    @PutMapping
    public Result<Boolean> update(@RequestBody Student student) {
        boolean result = studentService.updateStudent(student);
        return Result.success(result);
    }

    /**
     * 删除学生
     */
    @DeleteMapping("/{id}")
    public Result<Boolean> delete(@PathVariable Long id) {
        boolean result = studentService.deleteStudent(id);
        return Result.success(result);
    }
    
    /**
     * 批量删除学生
     */
    @DeleteMapping("/batch")
    public Result<Boolean> batchDelete(@RequestBody Long[] ids) {
        boolean result = studentService.batchDeleteStudent(ids);
        return Result.success(result);
    }
} 