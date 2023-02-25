import { ButtonHTMLAttributes, ReactNode } from "react";

export enum EButtonTheme {
	Clear = "clear",
	ClearInverted = "clearInverted",
	Outline = "outline",
	Background = "background",
	BackgroundInverted = "backgroundInverted",
}

export enum EButtonSize {
	M = "size_m",
	L = "size_l",
	XL = "size_xl",
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	theme?: EButtonTheme;
	square?: boolean;
	size?: EButtonSize;
	disabled?: boolean;
}
