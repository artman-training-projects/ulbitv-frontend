import { Story } from "@storybook/react";

import { ETheme, ThemeProvider } from "app/providers/ThemeProvider";

import "app/styles/index.scss";

export const StyleDecorator = (theme: ETheme) => (StoryComponent: Story) =>
	(
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				<StoryComponent />
			</div>
		</ThemeProvider>
	);
