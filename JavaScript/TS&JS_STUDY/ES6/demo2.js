实现 repeat 函数 function repeat (func, times, wait)
第一个参数是 function，第二个参数是重复执行的次数，第三个参数是每次任务执行的时间间隔，单位 ms
e.g. 
function sum(a, b) { return a+b }
sumRepeat = repeat(a, 3, 1000)
sumRepeat(1, 2)
输出
3
// 间隔 1s
3
// 间隔 1s
3

