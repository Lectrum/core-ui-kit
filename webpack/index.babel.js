import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { developmentConfig } from './developmentConfig';
import { productionConfig } from './productionConfig';

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
    {
        module: {
            rules: [{
                test: /\.js$/,
                include: PATHS.app,
                exclude: /node_modules/,
                use: "babel-loader",
            }],
        },
    },
]);

export default (env) => {
    if (env === 'production') {
        return merge(commonConfig, productionConfig);
    }

    return merge(commonConfig, developmentConfig);
};
