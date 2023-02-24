import { LoginModal } from "features/AuthByUsername";
import { ReactElement, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";
import { Button, EButtonTheme } from "shared/ui";

import { INavbarProps } from "./interfaces";
import styles from "./Navbar.module.scss";

export const Navbar = ({ className }: INavbarProps): ReactElement => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onOpenModal = useCallback(() => setIsAuthModal(true), []);
	const onCloseModal = useCallback(() => setIsAuthModal(false), []);

	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<Button
				theme={EButtonTheme.ClearInverted}
				onClick={onOpenModal}
				className={styles.links}
			>
				{t("Войти")}
			</Button>

			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</div>
	);
};
