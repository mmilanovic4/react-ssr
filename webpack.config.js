const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodeExternals = require('webpack-node-externals');
const TerserJSPlugin = require('terser-webpack-plugin');

const server = {
	target: 'node',
	externals: [NodeExternals()],
	entry: {
		server: [
			'core-js/stable',
			'regenerator-runtime/runtime',
			'./src/server/app.js'
		]
	}
};

const client = {
	target: 'web',
	entry: {
		'assets/client': [
			'core-js/stable',
			'regenerator-runtime/runtime',
			'./src/client/index.js',
			'./src/shared/style.scss'
		]
	}
};

module.exports = (env) => {
	const isDev = env?.dev === true;

	return {
		mode: isDev ? 'development' : 'production',
		watch: isDev,
		...(env?.server === true ? server : client),
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				Client: path.resolve(__dirname, 'src', 'client'),
				Server: path.resolve(__dirname, 'src', 'server'),
				Shared: path.resolve(__dirname, 'src', 'shared')
			}
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				// Babel
				{
					test: /\.jsx?$/,
					use: 'babel-loader',
					exclude: /node_modules/
				},
				// CSS
				{
					test: /\.s?css$/,
					use: [
						isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'assets/style.css',
				chunkFilename: '[id].css'
			}),
			new CopyPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, 'static'),
						to: path.resolve(__dirname, 'dist', 'static')
					},
					{
						from: path.resolve(__dirname, 'views'),
						to: path.resolve(__dirname, 'dist', 'views')
					}
				]
			})
		],
		optimization: {
			minimize: !isDev,
			minimizer: isDev
				? []
				: [new TerserJSPlugin({}), new CssMinimizerPlugin({})]
		}
	};
};
