const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: "./src/main.js",
    // none 模式为 最原始的打包，打包后的文件不会压缩
    mode: 'none',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024 // 10KB
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        // 用于生成 index.html
        new HtmlWebpackPlugin({
            title: "Webpack App simple", // 标题
            meta: {
                viewport: 'width=device-width'  // 设置视口
            },
            template: `./src/index.html`, // 模板文件
            minify: {
                removeComments: true,   // 移除注释
            }
        }),
        // 用于生成 copy.html
        new HtmlWebpackPlugin({
            filename: "about.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'public'),
                    to: path.join(__dirname, 'dist/assets')
                }
            ]
        })
    ]
}