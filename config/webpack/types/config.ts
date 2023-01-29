import { Configuration } from "webpack";

export interface IBuildPaths {
	entry: string;
	build: string;
	html: string;
}

export interface IBuildOptions {
	mode: Configuration["mode"];
	paths: IBuildPaths;
	isDev: boolean;
}
