// Core
import merge from 'webpack-merge';

export const development = merge([
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
