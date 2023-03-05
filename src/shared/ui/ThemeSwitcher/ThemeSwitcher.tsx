import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";
import { ETheme, useTheme } from "app/providers/ThemeProvider";
import { Button, EButtonTheme } from "shared/ui";
import { LightIcon, DarkIcon } from "shared/assets/icons";

import { IThemeSwitcherProps } from "./interfaces";

export const ThemeSwitcher = memo(
	({ className = "" }: IThemeSwitcherProps): ReactElement => {
		const { theme, toggleTheme } = useTheme();
		return (
			<Button
				theme={EButtonTheme.Clear}
				onClick={toggleTheme}
				className={classNames("", {}, [className])}
			>
				{theme === ETheme.Light ? <LightIcon /> : <DarkIcon />}
			</Button>
		);
	}
);
