const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // webpack uses a regular expression to determine which files it should look for and serve to a specific loader.
                // In this case any file that ends with .css will be served to the style-loader and the css-loader.
                test: /\.css$/,
                use: [
                    // Adds CSS to the DOM by injecting a <style> tag
                    'style-loader',

                    // The css-loader interprets @import and url() like import/require() and will resolve them.
                    // What the hell does it really mean ?
                    'css-loader'

                    // so it seems loaders are used from bottom up
                ]
            }
        ]
    }
};
