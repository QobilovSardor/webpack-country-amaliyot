const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		about: path.resolve(__dirname, './src/js/about.js'),
		main: path.resolve(__dirname, './src/js/main.js')
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name][contenthash].js',
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Country | Home',
			filename: 'index.html',
			template: './src/indexTemp.html',
			chunks: ['main'],
		}),
		new HtmlWebpackPlugin({
			title: 'Country | About',
			filename: 'about.html',
			template: './src/pages/aboutTemp.html',
			chunks: ['about'],
		})
	]
}