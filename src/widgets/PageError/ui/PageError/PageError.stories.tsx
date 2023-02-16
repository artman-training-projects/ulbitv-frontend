import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyleDecorator } from "shared/config/storybook/StyleDecorator";
import { ETheme } from "shared/providers";

import PageError from "./PageError";
import { IPageErrorProps } from "./interfaces";

export default {
	title: "widgets/PageError",
	component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args: IPageErrorProps) => (
	<PageError {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StyleDecorator(ETheme.Light)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator(ETheme.Dark)];
