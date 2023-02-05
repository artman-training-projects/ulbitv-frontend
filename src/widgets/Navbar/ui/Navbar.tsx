import { ReactElement } from "react";
import { classNames } from "shared/lib";
import { AppLink } from "shared/ui";
import { EAppLinkTheme } from "shared/ui/AppLink/interfaces";

import { INavbarProps } from "./interfaces";
import styles from "./Navbar.module.scss";

const Navbar = ({ className }: INavbarProps): ReactElement => {
	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink
					theme={EAppLinkTheme.Secondary}
					to="/"
					className={styles.mainLink}
				>
					Главная
				</AppLink>
				<AppLink theme={EAppLinkTheme.Secondary} to="/about">
					О сайте
				</AppLink>
			</div>
		</div>
	);
};

export default Navbar;
