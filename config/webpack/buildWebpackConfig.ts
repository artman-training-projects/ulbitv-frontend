import type { Configuration as WebpackConfiguration } from "webpack";

import type { IBuildOptions } from "./types/config";

import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugin";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
	options: IBuildOptions
): WebpackConfiguration {
	const {
		mode,
		paths: { build, entry },
		isDev,
	} = options;

	return {
		mode,
		entry,
		output: {
			filename: "[name].[contenthash].js",
			path: build,
			clean: true,
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		plugins: buildPlugins(options),
		devtool: isDev ? "inline-source-map" : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
