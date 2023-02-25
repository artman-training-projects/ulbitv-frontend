import { addDecorator } from "@storybook/react";

import { ETheme } from "../../src/app/providers/ThemeProvider";

import {
	StyleDecorator,
	RouterDecorator,
	StoreDecorator,
	I18nDecorator,
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

addDecorator(StoreDecorator);
addDecorator(RouterDecorator);
addDecorator(I18nDecorator);
addDecorator(StyleDecorator(ETheme.Light));
