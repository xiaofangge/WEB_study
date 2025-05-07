const mark = require('marked')

module.exports = source => {
    // console.log(source)

    // return "hello ~"
    // return `console.log("hello ~")`
    const html = mark.parse(source);
    // return `module.exports = ${JSON.stringify(html)}`
    // return `export default ${JSON.stringify(html)}`


    // 返回 html 字符串交给下一个 loader 处理
    return html;
}