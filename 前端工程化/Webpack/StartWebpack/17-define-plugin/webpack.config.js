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
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        API_BASE_URL: JSON.stringify('https://api.example.com')
      })
    ]
}
