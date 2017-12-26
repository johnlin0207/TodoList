const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
//import 'clean-webpack-plugin'
const ExtractTextPlugin=require('extract-text-webpack-plugin');

const extract1=new ExtractTextPlugin('./css/style_[name]_[contenthash].css');

const config = {
    entry: {
        main:'./src/index.js',
        vendor:['react','react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name]_[chunkhash:8].js'
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
                use:extract1.extract(['css-loader','sass-loader']) // use style-loader in development
            }
        ]
    },
    resolve: {
      extensions:['.js','.css','.scss'] //不再需要加''
    },
    plugins: [
        new HtmlwebpackPlugin({template: './index.html'}),
        new webpack.optimize.UglifyJsPlugin,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new CleanWebpackPlugin(['dist']),
        extract1
    ]
};

module.exports = config;