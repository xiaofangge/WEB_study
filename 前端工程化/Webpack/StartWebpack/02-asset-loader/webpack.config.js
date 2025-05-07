const path = require('path')

module.exports = {
    entry: "./src/main.css",
    // none 模式为 最原始的打包，打包后的文件不会压缩
    mode: 'none',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'output')
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}