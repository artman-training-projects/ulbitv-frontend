import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";
import { IInputProps } from "./interfaces";

export default {
	title: "shared/Input",
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: IInputProps) => (
	<Input {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	value: "value",
};
