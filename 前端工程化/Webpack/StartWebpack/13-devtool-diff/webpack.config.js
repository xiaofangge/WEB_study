const HtmlWebpackPlugin = require('html-webpack-plugin')

const allModes = [
    'eval',
    'eval-cheap-source-map',
    'eval-cheap-module-source-map',
    'eval-source-map',
    'cheap-source-map',
    'cheap-module-source-map',
    'source-map',
    'inline-cheap-source-map',
    'inline-cheap-module-source-map',
    'inline-source-map',
    'eval-nosources-cheap-source-map',
    'eval-nosources-cheap-module-source-map',
    'eval-nosources-source-map',
    'inline-nosources-cheap-source-map',
    'inline-nosources-cheap-module-source-map',
    'inline-nosources-source-map',
    'nosources-cheap-source-map',
    'nosources-cheap-module-source-map',
    'nosources-source-map',
    'cheap-source-map',
    'hidden-source-map'
]

module.exports = allModes.map(item => {
    return {
        devtool: item,
        mode: 'none',
        entry: './src/main.js',
        output: {
            filename: `js/${item}.js`
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: `${item}.html`
            })
        ]
    }
})

// module.exports = [
//     {
//         entry: './src/main.js',
//         output: {
//             filename: 'a.js'
//         }
//     },
//     {
//         entry: './src/main.js',
//         output: {
//             filename: 'b.js'
//         }
//     },
// ]