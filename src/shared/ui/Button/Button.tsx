import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";

import { EButtonSize, EButtonTheme, IButtonProps } from "./interfaces";
import styles from "./Button.module.scss";

export const Button = memo(
	({
		children,
		className = "",
		theme = EButtonTheme.Outline,
		square = false,
		size = EButtonSize.M,
		disabled = false,
		...otherProps
	}: IButtonProps): ReactElement => {
		const classNameMods: Record<string, boolean> = {
			[styles.square]: square,
			[styles.disabled]: disabled,
		};

		return (
			<button
				type="button"
				disabled={disabled}
				className={classNames(styles.button, classNameMods, [
					className,
					styles[theme],
					styles[size],
				])}
				{...otherProps}
			>
				{children}
			</button>
		);
	}
);
