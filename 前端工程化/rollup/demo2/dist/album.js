define(['./log-qOOiNtvv'], (function (log) { 'use strict';

    // 获取评论
    log.fetchApi('/comments').then(data => {
        data.forEach(item => {
            log.log(item);
        });
    });

}));
