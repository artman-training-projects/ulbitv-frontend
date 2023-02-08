import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";
import { AppLink, EAppLinkTheme } from "shared/ui";

import { INavbarProps } from "./interfaces";
import styles from "./Navbar.module.scss";

const Navbar = ({ className }: INavbarProps): ReactElement => {
	const { t: tAbout } = useTranslation("about");
	const { t: tMain } = useTranslation("main");

	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink
					theme={EAppLinkTheme.Secondary}
					to="/"
					className={styles.mainLink}
				>
					{tMain("Главная")}
				</AppLink>
				<AppLink theme={EAppLinkTheme.Secondary} to="/about">
					{tAbout("О сайте")}
				</AppLink>
			</div>
		</div>
	);
};

export default Navbar;
