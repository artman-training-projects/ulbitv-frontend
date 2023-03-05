import path from "path";

export default {
	globals: {
		__IS_DEV__: true,
		__API__: "",
	},
	clearMocks: true,
	testEnvironment: "jsdom",
	coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
	moduleDirectories: ["node_modules", "<rootDir>/src"],
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
	rootDir: "../../",
	modulePaths: ["<rootDir>/src"],
	testMatch: ["<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)"],
	setupFilesAfterEnv: ["<rootDir>/config/jest/setup.ts"],
	moduleNameMapper: {
		"entities/(.*)$": "<rootDir>/src/entities/$1",
		// "^(.*)": "<rootDir>/src/$1",
		"\\.s?css$": "identity-obj-proxy",
		"\\.svg$": path.resolve(__dirname, "stubSvg.tsx"),
	},
};
