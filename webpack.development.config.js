var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: [
			__dirname + "/app/rplApp.js"
		]
	},
	output: {
		path: __dirname + "/build",
		filename: "[name]-[hash].js"
	},

	module: {
		//加载器配置
		loaders: [{
			//js文件，用babel加载器
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']				
			}
		},{
			//scss文件，
			test: /\.scss$/,
			exclude: /node_modules/, 
			loaders: ['style', 'css', 'resolve-url', 'sass']
		},{
			//css文件，多个loader用!连接起来
			test: /\.css$/,
			loader: 'style!css!resolve-url'
		},{
	        test:/\.less$/,
	        loader: 'style!css!less'
    	},{
			//图片文件，小于8kb的转为base64
			test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
			loader: 'url?limit=8192'
		}]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
            names: ['framework', 'echart'],
            minChunks: Infinity
        }),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					require('autoprefixer')
				]
			}
		}),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index-template.html"
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("[name]-[hash].css")
	]
}