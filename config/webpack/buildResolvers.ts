import type { ResolveOptions as WebpackResolveOptions } from "webpack";

export function buildResolvers(): WebpackResolveOptions {
	return {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	};
}
