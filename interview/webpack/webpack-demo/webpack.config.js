const path = require('path');

module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.js', // 出口文件
        path: path.resolve(__dirname, 'dist') // 出口文件在当前目录的dist文件夹下
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
