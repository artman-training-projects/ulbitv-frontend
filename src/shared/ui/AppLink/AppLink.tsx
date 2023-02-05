import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { classNames } from "shared/lib";

import { EAppLinkTheme, IAppLink } from "./interfaces";
import styles from "./AppLink.module.scss";

const AppLink = ({
	className,
	children,
	to,
	theme = EAppLinkTheme.Primary,
	...otherProps
}: IAppLink): ReactElement => {
	return (
		<Link
			to={to}
			className={classNames(styles.appLink, {}, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
};

export default AppLink;
