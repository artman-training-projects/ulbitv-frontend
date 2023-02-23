import { ReactElement } from "react";

import { classNames } from "shared/lib";

import { EButtonSize, IButtonProps } from "./interfaces";
import styles from "./Button.module.scss";

export const Button = ({
	children,
	className,
	theme,
	square,
	size = EButtonSize.M,
	...otherProps
}: IButtonProps): ReactElement => {
	const classNameMpds: Record<string, boolean> = {
		[styles.square]: square,
	};

	return (
		<button
			type="button"
			className={classNames(styles.button, classNameMpds, [
				className,
				styles[theme],
				styles[size],
			])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
