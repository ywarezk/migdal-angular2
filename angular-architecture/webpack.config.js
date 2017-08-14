/**
 * Created by yarivkatz on 14/08/2017.
 */


var path = require('path');
module.exports = {

    entry: './src/main.ts',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }

}