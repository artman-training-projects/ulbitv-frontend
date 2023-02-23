import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { classNames } from "shared/lib";

import { EAppLinkTheme, IAppLinkProps } from "./interfaces";
import styles from "./AppLink.module.scss";

export const AppLink = ({
	className,
	children,
	to,
	theme = EAppLinkTheme.Primary,
	...otherProps
}: IAppLinkProps): ReactElement => (
	<Link
		to={to}
		className={classNames(styles.appLink, {}, [className, styles[theme]])}
		{...otherProps}
	>
		{children}
	</Link>
);
