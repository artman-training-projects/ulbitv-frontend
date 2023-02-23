import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyleDecorator } from "shared/config/storybook";
import { ETheme } from "app/providers/ThemeProvider";

import { PageLoader } from "./PageLoader";
import { IPageLoaderProps } from "./interfaces";

export default {
	title: "widgets/PageLoader",
	component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (
	args: IPageLoaderProps
) => <PageLoader {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StyleDecorator(ETheme.Light)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator(ETheme.Dark)];
