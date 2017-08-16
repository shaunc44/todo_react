var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: 				__dirname + '/app/components/index.html',
	filename: 				'index.html',
	inject: 				'body'
})

// var ExtractCssBlockPlugin = require('extract-css-block-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');


// var ExtractCSS = new ExtractTextPlugin("css!./index.css");


module.exports = {
	entry: 					__dirname + '/app/components/index.js',
	module: {
		loaders: [
			{
				test: 		/\.js$/,
				exclude: 	/node_modules/,
				loader: 	'babel-loader'
			},
			{
				test: 		/\.css$/,
				use: 		['style-loader', 'css-loader']
			}
		],
		// rules: [
		// 	{
		// 		test: 		/\.css$/,
		// 		use: 		['style-loader', 'css-loader']
		// 	}
		// ]
	},
	output: {
		filename: 			'transformed.js',
		path: 				__dirname + '/build'
	},
	plugins: 				[HTMLWebpackPluginConfig]
};


			// {
			// 	test: 		/\.css$/,
			// 	exclude: 	/node_modules/,
			// 	// use: 		ExtractTextPlugin.extract(['style-loader', 'css-loader'])
			// 	loader: 	'style-loader!css-loader'
			// 	// loader: 	ExtractTextPlugin.extract('style-loader', 'css-loader')
			// }



// module.exports = {
// 	entry: 					__dirname + '/app/components/index.css',
// 	module: {
// 		rules: [
// 			{
// 				test: 		/\.css$/,
// 				use: 		[ 'style-loader', 'css-loader' ]
// 			}
// 		]
// 	}
// };