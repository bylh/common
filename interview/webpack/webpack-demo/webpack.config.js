const path = require('path');
// 在目标文件夹(这里是dist)自动生成index.html， 并引用bundle输出文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理dist文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/*
 [什么是manifest](https://www.webpackjs.com/concepts/manifest/)
 */

module.exports = {
    // entry: './src/index.js', // 入口文件
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: { // webpack-dev-server
        contentBase: './dist',
        open: true
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Output Management' // 网页标题
        }),
    ],
    output: {
        // filename: 'bundle.js', // 出口文件
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'), // 出口文件在当前目录的dist文件夹下
        publicPath: '/',  // server 脚本使用 publicPath(webpack-dev-middleware server.js需要的)
    },
    // to-clear文件夹资源用到的loader
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/, // 匹配.css结尾的文件
    //             use: [
    //                 'style-loader',
    //                 'css-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(png|svg|jpg|gif)$/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(woff|woff2|eot|ttf|otf)$/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(csv|tsv)$/,
    //             use: [
    //                 'csv-loader'
    //             ]
    //         },
    //         {
    //             test: /\.xml$/,
    //             use: [
    //                 'xml-loader'
    //             ]
    //         }
    //     ]
    // }
};
