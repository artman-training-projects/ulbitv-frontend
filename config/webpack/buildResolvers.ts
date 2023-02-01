import type { ResolveOptions as WebpackResolveOptions } from "webpack";
import { IBuildOptions } from "./types/config";

export function buildResolvers(options: IBuildOptions): WebpackResolveOptions {
	const {
		paths: { src },
	} = options;

	return {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
		preferAbsolute: true,
		modules: [src, "node_modules"],
		mainFiles: ["index"],
		alias: {},
	};
}
