var len = 6;
for (var i = 0; i < len; i++) {
    setTimeout(function () {
        console.log("2 => ", i); // 这里输出 i 的值 6 6 6 6 6
    }, 1000);
}
console.log("1 => ", i); // 这里输出 i 的值 6 