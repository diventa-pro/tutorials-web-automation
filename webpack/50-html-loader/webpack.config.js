const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    // Array of plugins to apply to build chunk
    plugins: [
        new HtmlWebpackPlugin()
    ],
};
