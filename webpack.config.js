var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: 			__dirname + '/app/components/index.html',
	filename: 			'index.html',
	inject: 				'body'
})


module.exports = {
	entry: 					__dirname + '/app/components/index.js',
	module: {
		loaders: [
			{
				test: 		/\.js$/,
				exclude: 	/node_modules/,
				loader: 	'babel-loader'
			}
		]
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: 		/\.css$/,
	// 			use: 			[ 'style-loader', 'css-loader' ]
	// 		}
	// 	]
	// },
	output: {
		filename: 		'transformed.js',
		path: 				__dirname + '/build'
	},
	plugins: 				[HTMLWebpackPluginConfig]
};


// module.exports = {
// 	entry: 					__dirname + '/app/components/index.css',
// 	module: {
// 		rules: [
// 			{
// 				test: 		/\.css$/,
// 				use: 			[ 'style-loader', 'css-loader' ]
// 			}
// 		]
// 	}
// };