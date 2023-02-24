import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";
import { Button, Input } from "shared/ui";

import { ILoginFormProps } from "./interfaces";
import styles from "./LoginForm.module.scss";

export const LoginForm = ({ className }: ILoginFormProps): ReactElement => {
	const { t } = useTranslation();

	return (
		<div className={classNames(styles.loginForm, {}, [className])}>
			<Input type="text" placeholder="Введите username" autoFocus />
			<Input type="text" placeholder="Введите password" />

			<Button className={styles.loginButton}>{t("Войти")}</Button>
		</div>
	);
};
