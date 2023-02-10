import type { RuleSetRule as WebpackRuleSetRule } from "webpack";
import { loader as MiniCssExtractPluginLoader } from "mini-css-extract-plugin";

import type { IBuildOptions } from "./types/config";

export function buildLoaders(options: IBuildOptions): WebpackRuleSetRule[] {
	const { isDev } = options;

	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPluginLoader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes(".module.")),
						localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
					},
				},
			},
			"sass-loader",
		],
	};

	const babelLoader = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"],
				plugins: [
					[
						"i18next-extract",
						{
							locales: ["ru", "en"],
							keyAsDefaultValue: true,
						},
					],
				],
			},
		},
	};

	const tsLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	return [babelLoader, tsLoader, cssLoader, svgLoader, fileLoader];
}
