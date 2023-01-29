import { Configuration } from "webpack";

import { IBuildOptions } from "./types/config";

import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugin";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options: IBuildOptions): Configuration {
	const {
		mode,
		paths: { build, entry },
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
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(options),
	};
}
