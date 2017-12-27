import CleanWebpackPlugin from 'clean-webpack-plugin';

export const clean = path => ({
    plugins: [new CleanWebpackPlugin([path])],
});