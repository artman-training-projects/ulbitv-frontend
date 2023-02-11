import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";

import { INotFoundPageProps } from "./interfaces";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = ({ className }: INotFoundPageProps): ReactElement => {
	const { t } = useTranslation("notFound");

	return (
		<div className={classNames(styles.notFound, {}, [className])}>
			{t("Страница не найдена")}
		</div>
	);
};

export default NotFoundPage;
