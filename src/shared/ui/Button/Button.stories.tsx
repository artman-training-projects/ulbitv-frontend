import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import { EThemeButton, IButtonProps } from "./interfaces";

export default {
	title: "shared/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IButtonProps) => (
	<Button {...args} />
);

export const Clear = Template.bind({});
Clear.args = {
	children: "Text",
	theme: EThemeButton.Clear,
};

export const Outline = Template.bind({});
Outline.args = {
	children: "Text",
	theme: EThemeButton.Outline,
};
