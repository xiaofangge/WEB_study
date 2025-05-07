const path = require('path')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    // none 模式为 最原始的打包，打包后的文件不会压缩
    mode: 'none',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'output'),
        clean: true, // webpack5 自动清理输出目录
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024 * 1024,  // 10MB
                            esModule: false,    // 确保与 CSS 中的 url() 兼容
                        }
                    }
                ]
            },
            // {
            //     test: /\.png$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //         }
            //     ]
            // },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'a:href']
                    }
                }
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin()  // webpack 4
    ]
}