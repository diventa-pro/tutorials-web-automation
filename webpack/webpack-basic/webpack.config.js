const path = require('path');

module.exports = {
    // Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.
    // Values are: none, development or production
    mode: 'none',
    entry: './src/script/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
