import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";
import { Button, EThemeButton } from "shared/ui";

import { ILangSwitcherProps } from "./interfaces";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = ({ className }: ILangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const handleToggleTranslate = () => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

	return (
		<Button
			theme={EThemeButton.Clear}
			onClick={handleToggleTranslate}
			className={classNames(styles.langSwitcher, {}, [className])}
		>
			{t("Язык")}
		</Button>
	);
};

export default LangSwitcher;
