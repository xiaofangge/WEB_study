package com.example.student_admin.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.student_admin.common.Result;
import com.example.student_admin.entity.Class;
import com.example.student_admin.service.ClassService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 班级控制器
 */
@Slf4j
@RestController
@RequestMapping("/class")
@RequiredArgsConstructor
public class ClassController {

    private final ClassService classService;

    /**
     * 查询班级列表
     */
    @GetMapping("/list")
    public Result<List<Class>> list() {
        List<Class> list = classService.list();
        return Result.success(list);
    }

    /**
     * 分页查询班级列表
     */
    @GetMapping("/page")
    public Result<IPage<Class>> page(
            @RequestParam(defaultValue = "1") Integer pageNum,
            @RequestParam(defaultValue = "10") Integer pageSize,
            @RequestParam(required = false) String className,
            @RequestParam(required = false) String grade,
            @RequestParam(required = false) Long departmentId) {
        
        Page<Class> page = new Page<>(pageNum, pageSize);
        LambdaQueryWrapper<Class> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.like(className != null, Class::getClassName, className)
                .like(grade != null, Class::getGrade, grade)
                .eq(departmentId != null, Class::getDepartmentId, departmentId)
                .orderByDesc(Class::getCreatedTime);
        
        IPage<Class> result = classService.page(page, queryWrapper);
        return Result.success(result);
    }

    /**
     * 根据ID查询班级
     */
    @GetMapping("/{id}")
    public Result<Class> getById(@PathVariable Long id) {
        Class clazz = classService.getById(id);
        return Result.success(clazz);
    }

    /**
     * 新增班级
     */
    @PostMapping
    public Result<Boolean> save(@RequestBody Class clazz) {
        boolean result = classService.save(clazz);
        return Result.success(result);
    }

    /**
     * 更新班级
     */
    @PutMapping
    public Result<Boolean> update(@RequestBody Class clazz) {
        boolean result = classService.updateById(clazz);
        return Result.success(result);
    }

    /**
     * 删除班级
     */
    @DeleteMapping("/{id}")
    public Result<Boolean> delete(@PathVariable Long id) {
        boolean result = classService.removeById(id);
        return Result.success(result);
    }
}