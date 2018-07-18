// webpack config

const path = require('path');

module.exports = {
	entry: './src/app.jsx',
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
		}]
	}
};
