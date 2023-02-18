import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyleDecorator } from "shared/config/storybook";
import { ETheme } from "shared/providers/ThemeProvider";

import NotFoundPage from "./NotFoundPage";

export default {
	title: "pages/NotFoundPage",
	component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StyleDecorator(ETheme.Light)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator(ETheme.Dark)];
