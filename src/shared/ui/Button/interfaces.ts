import { ButtonHTMLAttributes, ReactNode } from "react";

export enum EThemeButton {
	Clear = "clear",
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	theme?: EThemeButton;
}
