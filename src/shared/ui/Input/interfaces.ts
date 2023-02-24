import { InputHTMLAttributes } from "react";

export interface IInputProps
	extends Omit<
		InputHTMLAttributes<HTMLInputElement>,
		"value" | "type" | "onChange"
	> {
	className?: string;
	type?: InputHTMLAttributes<HTMLInputElement>["type"];
	value?: string;
	onChange?: (value: string) => void;
}
