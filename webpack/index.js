const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const development = require('./development').developmentConfig;
const production = require('./production').productionConfig;

const PATHS = require('./paths').PATHS;

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
    if (env === 'production') {
        return merge(commonConfig, production);
    }

    return merge(commonConfig, development);
};
