import { addDecorator } from "@storybook/react";

import { ETheme } from "../../src/app/providers/ThemeProvider";

import {
	StyleDecorator,
	RouterDecorator,
} from "../../src/shared/config/storybook";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

addDecorator(StyleDecorator(ETheme.Light));
addDecorator(RouterDecorator);
