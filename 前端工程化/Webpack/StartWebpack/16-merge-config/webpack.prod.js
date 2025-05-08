const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge')  // 合并配置
const { CleanWebpackPlugin } = require('clean-webpack-plugin')  // 用来清理打包目录
const CopyWebpackPlugin = require('copy-webpack-plugin')  // 用来处理 public 下的静态资源
const path = require('path')


module.exports = merge(commonConfig, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'public'),
                    to: path.join(__dirname, 'dist/assets')
                }
            ]
        })
    ]
})