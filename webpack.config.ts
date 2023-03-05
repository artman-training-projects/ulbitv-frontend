import path from "path";
import type { Configuration } from "webpack";

import type { IBuildEnv, IBuildPaths } from "./config/webpack/types/config";
import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";

export default (env: IBuildEnv): Configuration => {
	const paths: IBuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "build"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
	};

	const mode = env.mode || "development";
	const port = env.port || 5000;
	const apiUrl = env.apiUrl || "http://localhost:8000";

	const isDev = mode === "development";

	const config: Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
		apiUrl,
	});

	return config;
};
