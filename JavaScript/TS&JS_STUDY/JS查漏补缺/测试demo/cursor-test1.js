// 1.金额校验
function checkMoney(money) {
    if (money > 0) {
        return true;
    } else {
        return false;
    }
}

// 2. 金额格式化
function formatMoney(money) {
    return money.toFixed(2);
}

console.log(formatMoney(123456789));