import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

function isProduction(mode: IEnvConfig['mode']) {
	return mode === 'production'
}


export function getStyleLoader(env: IEnvConfig) {
	if (isProduction(env.mode)) {
		return {
			loader: MiniCssExtractPlugin.loader,
			options: {
				defaultExport: true,
			}
		}
	}
	return {
		loader: 'style-loader'
	}
}

export function getCssLoader(env: IEnvConfig) {
	return {
		loader: "css-loader",
		options: {
			importLoaders: 2,
			modules: true,
		},
	}
}

export function getSassLoader(env: IEnvConfig) {
	return {
		loader: "sass-loader"
	}
}

type IEnvConfig = {
	mode: 'production' | 'development',
	port: string,
}


export default (env: IEnvConfig) => {
	env.mode = env.mode || 'development'
	env.port = env.port || '3000'
	const isProd = isProduction(env.mode)

	return {
		mode: env.mode,
		entry: "./src/index.tsx",
		devtool: "inline-source-map",
		plugins: [
			new MiniCssExtractPlugin(),
			new HtmlWebpackPlugin({
				template: "./static/index.html",
				inject: "head",
			}),
			new Dotenv({ path: "./static/.env" }),
		],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src")
			},
			extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".module.css", ".module.scss"],
		},
		output: {
			filename: "index_[fullhash].js",
			path: path.resolve(__dirname, "dist"),
			clean: true,
		},
		devServer: {
			static: {
				directory: path.join(__dirname, "public"),
			},
			compress: true,
			port: env.port,
		},
		module: {
			rules: [
				{
					test: /\.s?css$/,
					exclude: /node_modules/,
					use: [
						getStyleLoader(env),
						getCssLoader(env),
						getSassLoader(env),
					],
				},
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					loader: "ts-loader",
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
						},
					},
				},
			],
		},
	}
}
