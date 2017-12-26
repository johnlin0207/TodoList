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
            },
            {
                test:[/\.(png|jpg|svg)$/],
                exclude:/^node_modules$/,
                use:{
                    loader:'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',//if size smaller than 1024Bytes
                    // gonna be encoding to base64(daraURL)，小于规定limit大小的文件将会进行base64编码并内联到代码中，以减少
                    // http请求，若图片大于limit大小会被作为图片文件放进/images中
                }
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