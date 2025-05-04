import fetchApi from "./fetch";
import { log } from './log'

// 获取评论
fetchApi('/comments').then(data => {
    data.forEach(item => {
        log(item)
    })
})