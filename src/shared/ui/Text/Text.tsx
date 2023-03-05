import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";

import { ETextTheme, ITextProps } from "./interfaces";
import styles from "./Text.module.scss";

export const Text = memo(
	({
		text,
		title,
		className = "",
		theme = ETextTheme.Primary,
	}: ITextProps): ReactElement => (
		<div className={classNames(styles.text, {}, [className, styles[theme]])}>
			{title && <p className={styles.title}>{title}</p>}
			{text && <p className={styles.paragraph}>{text}</p>}
		</div>
	)
);
