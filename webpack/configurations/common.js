// Core
import HtmlWebpackPlugin from "html-webpack-plugin";
import merge from "webpack-merge";

import { PATHS } from "../paths";

export const common = merge([
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
