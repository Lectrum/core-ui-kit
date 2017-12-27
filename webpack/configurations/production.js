// Core
import merge from 'webpack-merge';
import UglifyWebpackPlugin from 'uglifyjs-webpack-plugin';

import { clean, setFreeVariable, extractBundles } from "../tools/";
import { PATHS } from '../paths';

export const production = merge([
    {
        performance: {
            hints: 'warning',
            maxEntrypointSize: 50000,
            maxAssetSize: 450000,
        },
        output: {
            chunkFilename: '[name].[chunkhash:8].js',
            filename: '[name].[chunkhash:8].js',
        },
    },
    clean(PATHS.build),
    {
        plugins: [new UglifyWebpackPlugin()],
    },
    {
        devtool: 'source-map',
    },
    extractBundles([
        {
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/.test(resource),
        },
        {
            name: 'manifest',
            minChunks: Infinity,
        },
    ]),
    setFreeVariable('process.env.NODE_ENV', 'production'),
]);
