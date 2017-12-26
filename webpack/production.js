const clean = require('./tools/clean').clean;
const setFreeVariable = require('./tools/setFreeVariable').setFreeVariable;
const extractBundles = require('./tools/extractBundles').extractBundles;
const PATHS = require('./paths').PATHS;
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

const productionConfig = merge([
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

exports.productionConfig = productionConfig;