import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyleDecorator } from "shared/config/storybook/StyleDecorator";
import { ETheme } from "shared/providers";

import Sidebar from "./Sidebar";
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