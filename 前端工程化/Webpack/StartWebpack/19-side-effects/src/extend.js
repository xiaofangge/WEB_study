Number.prototype.pad = function (size) {
    // 将数字转换为字符串
    let result = this + ''
    // 在数字前补指定个数的 0
    while (result.length < size) {
        result = `0${result}`
    }
    return result
}