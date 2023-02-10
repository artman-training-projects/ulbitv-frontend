import {
	HotModuleReplacementPlugin, WebpackPluginInstance, ProgressPlugin, DefinePlugin,
} from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import type { IBuildOptions } from "./types/config";

export function buildPlugins(options: IBuildOptions): WebpackPluginInstance[] {
	const {
		paths: { html },
		isDev,
	} = options;

	return [
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
		new HotModuleReplacementPlugin(),
	];
}
