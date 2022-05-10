const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(dirname, 'dist'),
        filename: 'bundler.js'
    }
};