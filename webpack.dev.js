const path = require('path');
const webpack=require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
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
    resolve: {
        extensions: ['.js','.scss','.css']
    },
    plugins: [
        new HtmlwebpackPlugin({template: './index.html'}),
        //new webpack.optimize.UglifyJsPlugin, //not in development mode
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
};

module.exports = config;