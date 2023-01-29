import type { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: ["style-loader", "css-loader", "sass-loader"],
	};

	const tsLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	return [tsLoader, cssLoader];
}
