export default {
    // 打包入口文件
    input: ['src/index.js', 'src/album.js'],
    output: {
        dir: 'dist',
        // 内容输出格式
        format: 'amd'
    }
}