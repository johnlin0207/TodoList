const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'todoList.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: [/\.scss$/, /\.css$/],
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({template: './index.html'}),
        new UglifyjsWebpackPlugin()
    ]
};

module.exports = config;