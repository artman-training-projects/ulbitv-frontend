import { memo, ReactElement } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo((): ReactElement => {
	const { t } = useTranslation("main");

	return <div>{t("Главная")}</div>;
});

export default MainPage;
