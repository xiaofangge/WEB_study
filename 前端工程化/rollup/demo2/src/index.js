import fetchApi from "./fetch";
import { log } from './log'

// 获取帖子
fetchApi('/posts').then(data => {
    data.forEach(item => {
        log(item)
    })
})