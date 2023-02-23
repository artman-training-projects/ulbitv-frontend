import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyleDecorator } from "shared/config/storybook";
import { ETheme } from "app/providers/ThemeProvider";

import { Sidebar } from "./Sidebar";
import { ISidebarProps } from "./interfaces";

export default {
	title: "widgets/Sidebar",
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args: ISidebarProps) => (
	<Sidebar {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StyleDecorator(ETheme.Light)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator(ETheme.Dark)];
