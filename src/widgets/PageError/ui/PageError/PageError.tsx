import { ReactElement } from "react";

import { classNames } from "shared/lib";

import { useTranslation } from "react-i18next";

import { Button } from "shared/ui";

import styles from "./PageError.module.scss";
import { IPageErrorProps } from "./interfaces";

export const PageError = ({ className }: IPageErrorProps): ReactElement => {
	const { t } = useTranslation();

	// eslint-disable-next-line no-restricted-globals
	const onReloadPageClick = () => location.reload();

	return (
		<div className={classNames(styles.pageError, {}, [className])}>
			<p>{t("Произошла непредвиденная ошибка")}</p>
			<Button onClick={onReloadPageClick}>{t("Обновить страницу")}</Button>
		</div>
	);
};
