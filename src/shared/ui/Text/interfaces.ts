export enum ETextTheme {
	Primary = "primary",
	Error = "error",
}

export interface ITextProps {
	title?: string;
	text?: string;
	className?: string;
	theme?: ETextTheme;
}
