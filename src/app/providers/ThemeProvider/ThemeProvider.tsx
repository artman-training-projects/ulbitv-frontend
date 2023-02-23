import { ReactElement, useMemo, useState } from "react";

import { ThemeContext } from "./ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "./constants";
import { ETheme, IThemeProviderProps } from "./interfaces";

const defaultTheme = localStorage.getItem(
	LOCAL_STORAGE_THEME_KEY || ETheme.Light
) as ETheme;

export const ThemeProvider = ({
	children,
	initialTheme,
}: IThemeProviderProps): ReactElement => {
	const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme);

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};
