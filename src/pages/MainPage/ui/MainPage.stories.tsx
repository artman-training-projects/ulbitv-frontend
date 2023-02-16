import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyleDecorator } from "shared/config/storybook/StyleDecorator";
import { ETheme } from "shared/providers";

import MainPage from "./MainPage";

export default {
	title: "pages/MainPage",
	component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StyleDecorator(ETheme.Light)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator(ETheme.Dark)];
