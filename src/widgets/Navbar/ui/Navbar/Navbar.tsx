import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";

import { INavbarProps } from "./interfaces";
import styles from "./Navbar.module.scss";

const Navbar = ({ className }: INavbarProps): ReactElement => (
	<div className={classNames(styles.navbar, {}, [className])}>
		<div className={styles.links}>{}</div>
	</div>
);

export default Navbar;
