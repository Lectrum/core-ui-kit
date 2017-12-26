const merge = require('webpack-merge');

const developmentConfig = merge([
    {
        output: {
            devtoolModuleFilenameTemplate:
                'webpack:///[absolute-resource-path]',
        },
    },
    {
        devtool: 'cheap-module-eval-source-map'
    },
    {
        devServer: {
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT,
            overlay: {
                errors: true,
                warnings: true,
            },
        },
    }
]);

exports.developmentConfig = developmentConfig;