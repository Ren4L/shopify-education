const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    mode: "development",
    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
                'import-glob-loader',
            ],
        },
        {
            test: /\.(js)$/i,
            use: [
                'babel-loader',
                'import-glob-loader',
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        })
    ],
};