import { clean } from "./tools/clean";
import { setFreeVariable } from "./tools/setFreeVariable";
import { extractBundles } from "./tools/extractBundles";
import { PATHS } from './paths';
import UglifyWebpackPlugin from 'uglifyjs-webpack-plugin';
import merge from 'webpack-merge';

export const productionConfig = merge([
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
