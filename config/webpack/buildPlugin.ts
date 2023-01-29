import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

import { IBuildOptions } from "./types/config";

export function buildPlugins({
	paths,
}: IBuildOptions): WebpackPluginInstance[] {
	const { html } = paths;

	return [
		new ProgressPlugin(),
		new HTMLWebpackPlugin({
			template: html,
		}),
	];
}
