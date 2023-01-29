import type { Configuration } from "webpack-dev-server";
import type { IBuildOptions } from "./types/config";

export function buildDevServer(options: IBuildOptions): Configuration {
	const { port } = options;

	return {
		port,
		open: true,
	};
}
