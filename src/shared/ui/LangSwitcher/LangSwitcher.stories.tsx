import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyleDecorator } from "shared/config/storybook";
import { ETheme } from "shared/providers/ThemeProvider";

import LangSwitcher from "./LangSwitcher";
import { ILangSwitcherProps } from "./interfaces";

export default {
	title: "shared/LangSwitcher",
	component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (
	args: ILangSwitcherProps
) => <LangSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StyleDecorator(ETheme.Light)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator(ETheme.Dark)];
