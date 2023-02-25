import { memo, ReactElement, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { classNames } from "shared/lib";
import { Button, ETextTheme, Input, Text } from "shared/ui";

import { loginByUsername } from "../../model/services/loginByUsername";
import { getLoginState } from "../../model/selectors/getLoginState";
import { loginActions } from "../../model/slice/loginSlice";

import { ILoginFormProps } from "./interfaces";
import styles from "./LoginForm.module.scss";

export const LoginForm = memo(
	({ className }: ILoginFormProps): ReactElement => {
		const { t } = useTranslation();
		const dispatch = useDispatch();
		const { password, username, isLoading, error } = useSelector(getLoginState);

		const onUsernameChange = useCallback(
			(value: string) => {
				dispatch(loginActions.setUsername(value));
			},
			[dispatch]
		);

		const onPasswordChange = useCallback(
			(value: string) => {
				dispatch(loginActions.setPassword(value));
			},
			[dispatch]
		);

		const onLoginClick = useCallback(() => {
			dispatch(loginByUsername({ password, username }));
		}, [dispatch, password, username]);

		return (
			<div className={classNames(styles.loginForm, {}, [className])}>
				{error && <Text text={error} theme={ETextTheme.Error} />}

				<Input
					type="text"
					placeholder="Введите username"
					value={username}
					onChange={onUsernameChange}
					autoFocus
				/>
				<Input
					type="text"
					placeholder="Введите password"
					value={password}
					onChange={onPasswordChange}
				/>

				<Button
					className={styles.loginButton}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t("Войти")}
				</Button>
			</div>
		);
	}
);
