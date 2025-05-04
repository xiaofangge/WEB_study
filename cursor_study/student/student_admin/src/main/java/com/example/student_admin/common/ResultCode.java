package com.example.student_admin.common;

/**
 * 返回状态码
 */
public interface ResultCode {

    /**
     * 成功
     */
    Integer SUCCESS = 200;

    /**
     * 失败
     */
    Integer ERROR = 500;

    /**
     * 未认证
     */
    Integer UNAUTHORIZED = 401;

    /**
     * 未授权
     */
    Integer FORBIDDEN = 403;

    /**
     * 参数错误
     */
    Integer PARAM_ERROR = 400;

    /**
     * 不存在
     */
    Integer NOT_FOUND = 404;
} 