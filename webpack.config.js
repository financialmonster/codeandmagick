const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: './js/index.js',

	output: {
		filename: './js/bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	watch: true,

	devtool: 'eval',

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'eslint-loader'
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'stage-0']
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000,
						name: '[name].[ext]',
						outputPath: 'img/'
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/style.css'
		})
		// new WebpackBundleAnalyzer()
	],
	resolve: {
		extensions: ['.js', '.json', '.jsx', '*']
	}
};
