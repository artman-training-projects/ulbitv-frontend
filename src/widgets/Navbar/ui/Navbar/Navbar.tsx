import { getUserAuthData, userActions } from "entities/User";
import { ReactElement, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { LoginModal } from "features/AuthByUsername";
import { classNames } from "shared/lib";
import { Button, EButtonTheme } from "shared/ui";

import { INavbarProps } from "./interfaces";
import styles from "./Navbar.module.scss";

export const Navbar = ({ className }: INavbarProps): ReactElement => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onOpenModal = useCallback(() => setIsAuthModal(true), []);
	const onCloseModal = useCallback(() => setIsAuthModal(false), []);

	const onLogoutClick = useCallback(() => {
		onCloseModal();
		dispatch(userActions.logout());
	}, [dispatch, onCloseModal]);

	if (authData) {
		return (
			<div className={classNames(styles.navbar, {}, [className])}>
				<Button
					theme={EButtonTheme.ClearInverted}
					onClick={onLogoutClick}
					className={styles.links}
				>
					{t("Выйти")}
				</Button>
			</div>
		);
	}

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
