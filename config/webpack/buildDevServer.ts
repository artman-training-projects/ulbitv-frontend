import type { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import type { IBuildOptions } from "./types/config";

export function buildDevServer(
	options: IBuildOptions
): WebpackDevServerConfiguration {
	const { port } = options;

	return {
		port,
		open: true,
		historyApiFallback: true,
	};
}
