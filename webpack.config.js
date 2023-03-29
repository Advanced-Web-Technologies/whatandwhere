const path = require('path');

module.exports = {
    context: __dirname + '/src/main/js',
    entry: './App.js',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: ['babel-loader']
            }
        ]
    }
};