const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

class MyPlugin {
    apply(compiler) {
        console.log("MyPlugin 启动")

        compiler.hooks.emit.tap('MyPlugin', compilation => {
            // compilation => 可以理解为此次打包的上下文
            for (const name in compilation.assets) {
                // 打印输出文件名
                // console.log(name) 
                // 打印文件内容
                console.log(compilation.assets[name].source())
                if (name.endsWith('.js')) {
                    const contents = compilation.assets[name].source()
                    const widthoutComments = contents.replace(/\/\*\*+\*\//g, '')
                    compilation.assets[name] = {
                        source: () => widthoutComments,
                        size: () => widthoutComments.length
                    }
                }
            }
        })
    }
}

module.exports = {
    entry: "./src/main.js",
    // none 模式为 最原始的打包，打包后的文件不会压缩
    mode: 'none',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        clean: true,
    },
    // webpack-dev-server 配置
    devServer: {
        // 额外为开发服务器指定查找资源目录 已废弃
        // contentBase: path.join(__dirname, 'public')
        
        // 正确配置 静态资源目录
        static: {
            directory: path.join(__dirname, 'public')
        },
        // 代理配置
        proxy: [
            {
                context: ['/api'],  // 可传数组
                // http://localhost:8080/api/users -> https://api.github.com/api/users
                target: 'https://api.github.com',
                // http://localhost:8080/api/users -> https://api.github.com/users
                pathRewrite: {
                    '^/api': ''
                },
                // 不能使用 localhost:8080 作为请求 Github 的主机名
                changeOrigin: true,
            }
        ] 
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
        // 开发阶段最好不要用这个插件
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.join(__dirname, 'public'),
        //             to: path.join(__dirname, 'dist/assets')
        //         }
        //     ]
        // }),
        new MyPlugin()
    ]
}