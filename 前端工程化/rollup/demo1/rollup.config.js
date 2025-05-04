import json from "rollup-plugin-json"
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    // 打包入口文件
    input: 'src/index.js',
    output: {
        // 打包输出文件
        // file: 'dist/bundle.js',
        // 内容输出格式
        // format: 'iife'
        dir: 'dist',
        format: 'amd'
    },
    plugins: [
        json(),
        resolve(),
        commonjs()
    ]
}