import { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";

/** Компонент для тестирования */
export const BugButton = (): ReactElement => {
	const { t } = useTranslation();
	const [error, setError] = useState(false);

	const onThrowErrorClick = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return <Button onClick={onThrowErrorClick}>{t("throw error")}</Button>;
};
