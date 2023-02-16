import { ButtonHTMLAttributes, ReactNode } from "react";

export enum EThemeButton {
	Clear = "clear",
	Outline = "outline",
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	theme?: EThemeButton;
}
