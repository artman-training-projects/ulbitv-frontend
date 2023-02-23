import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppLink } from "./AppLink";
import { IAppLinkProps, EAppLinkTheme } from "./interfaces";

export default {
	title: "shared/AppLink",
	component: AppLink,
	args: {
		to: "/",
	},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args: IAppLinkProps) => (
	<AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	children: "Text",
	theme: EAppLinkTheme.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: "Text",
	theme: EAppLinkTheme.Secondary,
};

export const Red = Template.bind({});
Red.args = {
	children: "Text",
	theme: EAppLinkTheme.Red,
};
