var webpack = require('webpack');


module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        rules:
        [
            {
                test: /\.(js|jsx)?$/,
                exclude: [/node_modules/, /public/],
                loader: 'babel-loader',
                query:
                    {
                        presets:['es2015', 'react'],
                        "plugins": ["react-hot-loader/babel"]
                    }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: [/node_modules/, /public/]
            }
        ]
    }
}