// webpack config

const path = require('path');

module.exports = {
	entry: './src/playground/redux_expensify.jsx',
	output: {
		path: path.resolve(__dirname, './public/scripts'),
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.jsx$/,
			exclude: /node_modules/
		}, {
			test: /\.s?css$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, './public'),
		historyApiFallback: true
	}
};
