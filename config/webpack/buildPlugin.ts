import type { WebpackPluginInstance } from "webpack";
import { ProgressPlugin as WebpackProgressPlugin } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import type { IBuildOptions } from "./types/config";

export function buildPlugins(options: IBuildOptions): WebpackPluginInstance[] {
	const {
		paths: { html },
	} = options;

	return [
		new WebpackProgressPlugin(),
		new HTMLWebpackPlugin({
			template: html,
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
	];
}
