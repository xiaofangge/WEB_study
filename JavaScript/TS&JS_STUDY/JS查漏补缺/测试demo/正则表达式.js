// 1.体验正则表达式的魅力
const str1 = "fangruichuan1999xinchao0210"
console.log([...str1].filter(c => !Number.isNaN(Number(c))).join(""))  // 19990210
console.log(str1.match(/\d/g).join(''))  // 19990210



console.log("--------------------------------")
// 2.字面量创建正则表达式
const str2 = "fangruichuan1999xinchao0210"
const a = '@'
console.log(/u/.test(str2))// true
console.log(/a/.test(str2))// true
console.log(eval(`/${a}/`).test(str2))// false



console.log("--------------------------------")
// 3.选择符的使用
const hd = "houdunren.com"
console.log(/o|2/.test(hd))
const phone = '010-9999999'
console.log(/010\-\d{7,8}/.test(phone))



console.log("--------------------------------")
// 4.原子表和原子组的使用
const reg = /[1234]/        // 原子表
console.log('13'.match(reg))    // [ '1', index: 0, input: '13', groups: undefined ]
const reg2 = /(12)|(56)/        // 原子组
console.log("14".match(reg2))   // null
console.log("56".match(reg2))   // [ '56', undefined, '56', index: 0, input: '56', groups: undefined ]



console.log("--------------------------------")
// 5.转义字符的理解
let price = 'ddddd@ddddd'
console.log(/\d+\.\d+/.test(price)) // true
console.log('d' === 'd')    // true
console.log('\d' === 'd')   // true
console.log('\d+\.\d+')     // d+.d+
let reg3 = new RegExp('\d+\.\d+');
console.log(reg3.test(price)) // true
let price2 = 12.34
console.log(new RegExp('\\d+\\.\\d+').test(price2)) // true

let url = 'https://www.houdunren.com'
console.log(new RegExp('https?:\/\/\\w+\\.\\w+\\.\\w+').test(url))


console.log("--------------------------------")
// 6. 字符边界约束
const zif = '123'
console.log('字符边界 =>', zif.match(/^\d$/))    


console.log("--------------------------------")
// 7. 数值与空白元字符
const str3 = '张三:011-99999999,李四:012-88888888'
console.log(str3.match(/\d{3}-\d{7,8}/))
console.log(str3.match(/\d{3}-\d{7,8}/g))   // 全局搜索
console.log(str3.match(/[-\d:;]/g))
// [
//     ':', '0', '1', '1', '-', '9',
//     '9', '9', '9', '9', '9', '9',
//     '9', ':', '0', '1', '2', '-',
//     '8', '8', '8', '8', '8', '8',
//     '8', '8'
//   ]
console.log(str3.match(/[^-\d:;]/g))    // [ '张', '三', ',', '李', '四' ]
console.log(str3.match(/[^-\d:;]+/g))    // [ '张三', ',李四' ]



console.log("--------------------------------")
// 8. w 和 W 元字符
let email = 'fafdafdsf!1878364351@qq.com'
console.log(email.match(/\w+@\w+\.\w+/))
console.log(email.match(/^\w+@\w+\.\w+$/)) // null

