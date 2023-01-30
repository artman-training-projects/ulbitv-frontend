import type { RuleSetRule as WebpackRuleSetRule } from "webpack";
import { loader as MiniCssExtractPluginLoader } from "mini-css-extract-plugin";

import type { IBuildOptions } from "./types/config";

export function buildLoaders(options: IBuildOptions): WebpackRuleSetRule[] {
	const { isDev } = options;

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

	const tsLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	return [tsLoader, cssLoader];
}
