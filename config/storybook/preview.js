import { addDecorator } from "@storybook/react";

import { ETheme } from "../../src/shared/providers";

import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";

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
