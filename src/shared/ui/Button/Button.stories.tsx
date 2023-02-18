import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import { EButtonSize, EButtonTheme, IButtonProps } from "./interfaces";

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
	theme: EButtonTheme.Clear,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
	children: "Text",
	theme: EButtonTheme.Outline,
	size: EButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
	children: "Text",
	theme: EButtonTheme.Outline,
	size: EButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
	children: "Text",
	theme: EButtonTheme.Outline,
	size: EButtonSize.XL,
};

export const Background = Template.bind({});
Background.args = {
	children: "Text",
	theme: EButtonTheme.Background,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
	children: "Text",
	theme: EButtonTheme.BackgroundInverted,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
	children: ">",
	theme: EButtonTheme.Background,
	square: true,
	size: EButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
	children: ">",
	theme: EButtonTheme.Background,
	square: true,
	size: EButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
	children: ">",
	theme: EButtonTheme.Background,
	square: true,
	size: EButtonSize.XL,
};
