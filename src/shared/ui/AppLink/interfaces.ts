import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export enum EAppLinkTheme {
	Primary = "primary",
	Secondary = "secondary",
	Red = "red",
}

export interface IAppLinkProps extends LinkProps {
	children: ReactNode;
	className?: string;
	theme?: EAppLinkTheme;
}
