import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { BugButton } from "shared/providers";

const MainPage = (): ReactElement => {
	const { t } = useTranslation("main");

	return (
		<div>
			<BugButton />
			{t("Главная")}
		</div>
	);
};

export default MainPage;
