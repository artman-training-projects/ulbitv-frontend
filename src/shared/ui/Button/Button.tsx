import { ReactElement } from "react";

import { classNames } from "shared/lib";

import { EThemeButton, IButtonProps } from "./interfaces";
import styles from "./Button.module.scss";

const Button = ({
	children,
	className,
	theme = EThemeButton.Clear,
	...otherProps
}: IButtonProps): ReactElement => (
	<button
		type="button"
		className={classNames(styles.button, {}, [className, styles[theme]])}
		{...otherProps}
	>
		{children}
	</button>
);

export default Button;
