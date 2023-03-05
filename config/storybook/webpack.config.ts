import path from "path";
import { Configuration, DefinePlugin, RuleSetRule } from "webpack";

import { buildCssLoader } from "../webpack/loaders/buildCssLoader";
import { buildSvgLoader } from "../webpack/loaders/buildSvgLoader";

export default ({ config }: { config: Configuration }) => {
	config.resolve!.modules!.push(path.resolve(__dirname, "..", "..", "src"));
	config.resolve!.extensions!.push(".ts", ".tsx");

	// eslint-disable-next-line no-param-reassign
	config.module!.rules = config.module!.rules!.map(
		// @ts-ignore
		(rule: RuleSetRule): RuleSetRule => {
			if (/svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i };
			}

			return rule;
		}
	);

	config.module!.rules!.push(buildCssLoader(true));
	config.module!.rules.push(buildSvgLoader());

	config.plugins!.push(
		new DefinePlugin({
			__IS_DEV__: true,
			__API__: "",
		})
	);

	return config;
};
