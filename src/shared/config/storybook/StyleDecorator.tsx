import { Story } from "@storybook/react";

import { ETheme } from "shared/providers/ThemeProvider";

import "app/styles/index.scss";

export const StyleDecorator = (theme: ETheme) => (StoryComponent: Story) =>
	(
		<div className={`app ${theme}`}>
			<StoryComponent />
		</div>
	);
