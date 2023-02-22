import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StyleDecorator } from "shared/config/storybook";
import { ETheme } from "shared/providers/ThemeProvider";

import Modal from "./Modal";
import { IModalProps } from "./interfaces";

export default {
	title: "ui/Modal",
	component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: IModalProps) => (
	<Modal {...args} />
);

export const Light = Template.bind({});
Light.args = {
	isOpen: true,
	children:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis facere corporis repellat praesentium. Nihil saepe fugit ipsum odio, nobis assumenda veritatis inventore, repellat incidunt accusantium perferendis similique, eos perspiciatis aliquam.",
};
Light.decorators = [StyleDecorator(ETheme.Light)];

export const Dark = Template.bind({});
Dark.args = {
	isOpen: true,
	children:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis facere corporis repellat praesentium. Nihil saepe fugit ipsum odio, nobis assumenda veritatis inventore, repellat incidunt accusantium perferendis similique, eos perspiciatis aliquam.",
};
Dark.decorators = [StyleDecorator(ETheme.Dark)];
