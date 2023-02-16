import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyleDecorator } from "shared/config/storybook/StyleDecorator";
import { ETheme } from "shared/providers";

import Loader from "./Loader";
import { ILoaderProps } from "./interfaces";

export default {
	title: "shared/Loader",
	component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args: ILoaderProps) => (
	<Loader {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StyleDecorator(ETheme.Light)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator(ETheme.Dark)];
