import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyleDecorator } from "shared/config/storybook/StyleDecorator";
import { ETheme } from "shared/providers";

import ThemeSwitcher from "./ThemeSwitcher";
import { IThemeSwitcherProps } from "./interfaces";

export default {
	title: "shared/ThemeSwitcher",
	component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (
	args: IThemeSwitcherProps
) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StyleDecorator(ETheme.Light)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator(ETheme.Dark)];
