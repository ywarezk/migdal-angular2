/**
 * webpack configuration
 */

var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './entry.ts',
    // entry: {
    //     entry1: './entry1.ts',
    //     entry2: './entry2.ts'
    // }

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },

    // output: {
    //     filename: [name].[hash].js,
    //     path: path.resolve(__dirname, 'dist')
    // }

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },

    plugins: [
        new UglifyJSPlugin()
    ]
}
