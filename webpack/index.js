const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const development = require('./development').developmentConfig;

const PATHS = {
    app: path.join(__dirname, '../app'),
    build: path.join(__dirname, '../build'),
};

const commonConfig = merge([
    {
        entry: {
            app: PATHS.app,
        },
        output: {
            path: PATHS.build,
            filename: '[name].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Lectrum Core UI Kit",
            }),
        ],
    },
]);

module.exports = env => {
    return merge(commonConfig, development);
};
