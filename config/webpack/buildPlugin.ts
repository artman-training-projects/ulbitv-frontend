import {
	HotModuleReplacementPlugin,
	WebpackPluginInstance,
	ProgressPlugin,
	DefinePlugin,
} from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import type { IBuildOptions } from "./types/config";

export function buildPlugins(options: IBuildOptions): WebpackPluginInstance[] {
	const {
		paths: { html },
		isDev,
	} = options;

	const plugins = [
		new ProgressPlugin(),
		new HTMLWebpackPlugin({
			template: html,
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
	];

	if (isDev) {
		plugins.push(
			new HotModuleReplacementPlugin(),
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
			})
		);
	}

	return plugins;
}
