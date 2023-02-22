import { ReactElement, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";
import { Button, EButtonTheme, Modal } from "shared/ui";

import { INavbarProps } from "./interfaces";
import styles from "./Navbar.module.scss";

const Navbar = ({ className }: INavbarProps): ReactElement => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onModalToggle = useCallback(() => setIsAuthModal((prev) => !prev), []);

	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<Button
				theme={EButtonTheme.ClearInverted}
				onClick={onModalToggle}
				className={styles.links}
			>
				{t("Войти")}
			</Button>

			<Modal isOpen={isAuthModal} onCLose={onModalToggle}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
				animi soluta excepturi sint ullam, a molestias, laboriosam corporis
				maxime provident vel ex dolor mollitia nobis nesciunt, commodi non
				exercitationem vero.
			</Modal>
		</div>
	);
};

export default Navbar;
