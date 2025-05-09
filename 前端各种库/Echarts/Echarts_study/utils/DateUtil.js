
// timestamp时间戳 formater时间格式
function formatDate(timestamp, formater) {
    const date = new Date();
    date.setTime(parseInt(timestamp));
    formater = (formater != null) ? formater : 'yyyy-MM-dd hh:mm';
    let ptype = Date.prototype;
    ptype.Format = function (fmt) {
        const o = {
            'M+': this.getMonth() + 1, // 月
            'd+': this.getDate(), // 日
            'h+': this.getHours(), // 小时
            'm+': this.getMinutes(), // 分
            's+': this.getSeconds(), // 秒
            'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
            S: this.getMilliseconds(), // 毫秒
        };

        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (`${this.getFullYear()}`).substr(4 - RegExp.$1.length));
        for (const k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
                    (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
            }
        }
        return fmt;
    };
    return date.Format(formater);
}

