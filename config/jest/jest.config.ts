import path from "path";

export default {
	globals: {
		__IS_DEV__: true,
	},
	clearMocks: true,
	testEnvironment: "jsdom",
	coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
	moduleDirectories: ["node_modules"],
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
	rootDir: "../../",
	modulePaths: ["<rootDir>src"],
	testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
	setupFilesAfterEnv: ["<rootDir>config/jest/setup.ts"],
	moduleNameMapper: {
		"\\.s?css$": "identity-obj-proxy",
		"\\.svg$": path.resolve(__dirname, "stubSvg.tsx"),
	},
};
