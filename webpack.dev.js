const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const appDirectory = __dirname;
const devConfig = {
    mode: "development",
    devtool: "inline-source-map",
    devServer:  {
        contentBase: path.resolve(appDirectory, "public"),
        compress: true,
        hot: true,
        open: true,
        publicPath: "/",
        port:8000
    }
};
module.exports = merge(common, devConfig);