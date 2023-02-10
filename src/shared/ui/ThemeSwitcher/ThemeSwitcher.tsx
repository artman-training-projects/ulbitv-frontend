import { ReactElement } from "react";

import { classNames } from "shared/lib";
import { ETheme, useTheme } from "shared/providers";
import { Button, EThemeButton } from "shared/ui";
import { LightIcon, DarkIcon } from "shared/assets/icons";

import { IThemeSwitcherProps } from "./interfaces";

const ThemeSwitcher = ({ className }: IThemeSwitcherProps): ReactElement => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			theme={EThemeButton.Clear}
			onClick={toggleTheme}
			className={classNames("", {}, [className])}
		>
			{theme === ETheme.Light ? <LightIcon /> : <DarkIcon />}
		</Button>
	);
};

export default ThemeSwitcher;
