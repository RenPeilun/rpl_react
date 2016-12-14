var fs = require('fs')//fs文件操作
var path = require('path')
var webpack = require('webpack')

module.exports = {

	devtool: 'inline-source-map',

	/**
	 * 页面入口文件配置
	 * 这里会将app，vendor传给output配置项
	 */
	entry: {
		app: [
			__dirname + '/app/rplApp.js'
			],
		//支持数组模式，将加载数组中的所有模块，合成一块
	},

	/**
	 * 入口文件输出配置
	 * 此处会生成app.js和vendor.js两个文件在build目录下
	 */
	output: {
		path: __dirname + '/build',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js',
		publicPath: '/build/'
	},

	/**
	 * 其他解决方案配置
	 */
	resolve: {
		//一般配置文件后缀名，还可以有其他配置
		//当requrie的模块找不到时，加这些后缀
		extensions: ['', '.js', '.jsx']
	},
	
	/**
	 * module告知webpack每一种文件都需要什么加载器来处理
	 */
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

	/**
	 * 插件项
	 */
	plugins: [
		//CommonsChunkPlugin用于提供多个入口文件的公共脚本部分
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
		// new webpack.DefinePlugin({
		//	 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		// })
	]

}
