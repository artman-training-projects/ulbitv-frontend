import { ProgressPlugin } from "webpack";
import type { WebpackPluginInstance } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

import type { IBuildOptions } from "./types/config";

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
