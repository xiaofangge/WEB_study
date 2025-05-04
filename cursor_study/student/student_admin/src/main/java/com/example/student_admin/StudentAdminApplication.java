package com.example.student_admin;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.student_admin.mapper")
public class StudentAdminApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentAdminApplication.class, args);
    }

} 