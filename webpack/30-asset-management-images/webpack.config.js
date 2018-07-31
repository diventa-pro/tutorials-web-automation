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
                test: /\.jpg$/,
                use: [
                    // file-loader emits all the files matched with the given regex in the dist folder.
                    'file-loader'
                ]
            }
        ]
    }
};
