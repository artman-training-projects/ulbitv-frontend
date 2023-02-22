import { PropsWithChildren } from "react";

export enum ETheme {
	Light = "light",
	Dark = "dark",
}

export interface IThemeContextProps {
	theme?: ETheme;
	setTheme?: (theme: ETheme) => void;
}

export interface ThemeProviderProps extends PropsWithChildren<any> {
	initialTheme?: ETheme;
}

export interface IUseThemeResult {
	toggleTheme: () => void;
	theme: ETheme;
}
