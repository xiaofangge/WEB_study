const webpack = require('webpack')

module.exports = {
    mode: 'none',
    entry: './src/main.js',
    output: {
      filename: 'js/bundle.js'
    },
    devServer: {
      // hot: true,
      hot: 'only',
    },
    optimization: {
      sideEffects: true,
      // usedExports: true,  // 启用 Tree Shaking 没用到的代码不用导出
      // minimize: true,     // 启用代码压缩
      // concatenateModules: true, // 启用模块合并
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        API_BASE_URL: JSON.stringify('https://api.example.com')
      })
    ]
}
