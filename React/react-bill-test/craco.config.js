const path = require('path');

module.exports = {
    // webpack配置
    webpack: {
        // 配置别名
        alias: {
            // 约定 使用 @ 作为 src 的别名
            '@': path.resolve(__dirname,'src')
        }
    }
}