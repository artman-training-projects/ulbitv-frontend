import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";
import { Button, EButtonTheme } from "shared/ui";

import { ILangSwitcherProps } from "./interfaces";

const LangSwitcher = ({ className, short }: ILangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const handleToggleTranslate = () =>
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

	return (
		<Button
			theme={EButtonTheme.Clear}
			onClick={handleToggleTranslate}
			className={classNames("", {}, [className])}
		>
			{t(short ? "Яз" : "Язык")}
		</Button>
	);
};

export default LangSwitcher;
