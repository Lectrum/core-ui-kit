const webpack = require('webpack');

exports.extractBundles = bundles => ({
    plugins: bundles.map(
        bundle => new webpack.optimize.CommonsChunkPlugin(bundle)
    ),
});