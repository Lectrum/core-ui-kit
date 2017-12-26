const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.clean = path => ({
    plugins: [new CleanWebpackPlugin([path])],
});