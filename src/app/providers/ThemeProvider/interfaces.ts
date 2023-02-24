import { PropsWithChildren } from "react";

export enum ETheme {
	Light = "app_light_theme",
	Dark = "app_dark_theme",
}

export interface IThemeContextProps {
	theme?: ETheme;
	setTheme?: (theme: ETheme) => void;
}

export interface IThemeProviderProps extends PropsWithChildren<any> {
	initialTheme?: ETheme;
}

export interface IUseThemeResult {
	toggleTheme: () => void;
	theme: ETheme;
}
