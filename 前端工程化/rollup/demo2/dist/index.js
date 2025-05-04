define(['./log-qOOiNtvv'], (function (log) { 'use strict';

    // 获取帖子
    log.fetchApi('/posts').then(data => {
        data.forEach(item => {
            log.log(item);
        });
    });

}));
