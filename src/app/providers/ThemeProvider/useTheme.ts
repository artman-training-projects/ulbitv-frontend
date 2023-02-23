import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";
import { ETheme, IUseThemeResult } from "./interfaces";
import { LOCAL_STORAGE_THEME_KEY } from "./constants";

export const useTheme = (): IUseThemeResult => {
	const { setTheme, theme } = useContext(ThemeContext);

	const toggleTheme = (): void => {
		const newTheme = theme === ETheme.Dark ? ETheme.Light : ETheme.Dark;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme, toggleTheme };
};
