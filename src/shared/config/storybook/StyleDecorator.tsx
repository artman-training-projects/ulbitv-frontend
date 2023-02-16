import { Story } from "@storybook/react";

import { ETheme } from "shared/providers";

import "app/styles/index.scss";

export const StyleDecorator = (theme: ETheme) => (StoryComponent: Story) =>
	(
		<div className={`app ${theme}`}>
			<StoryComponent />
		</div>
	);
