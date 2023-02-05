import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export enum EAppLinkTheme {
	Primary = "primary",
	Secondary = "secondary",
}

export interface IAppLink extends LinkProps {
	children: ReactNode;
	className?: string;
	theme?: EAppLinkTheme;
}
