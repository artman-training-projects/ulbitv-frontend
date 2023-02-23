import { RoutePath } from "app/providers/router";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";
import {
	Button,
	EButtonTheme,
	LangSwitcher,
	ThemeSwitcher,
	EButtonSize,
	AppLink,
	EAppLinkTheme,
} from "shared/ui";

import { AboutIcon, MainIcon } from "shared/assets/icons";

import { ISidebarProps } from "./interfaces";

import styles from "./Sidebar.module.scss";

export const Sidebar = ({ className }: ISidebarProps): ReactElement => {
	const [collapsed, setCollapsed] = useState(false);
	const { t: tAbout } = useTranslation("about");
	const { t: tMain } = useTranslation("main");

	const handleToggle = (): void => setCollapsed((prev) => !prev);

	return (
		<div
			data-testid="Sidebar"
			className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button
				className={styles.collapsedButton}
				data-testid="Sidebar-toggle"
				type="button"
				onClick={handleToggle}
				square
				size={EButtonSize.L}
				theme={EButtonTheme.BackgroundInverted}
			>
				{collapsed ? ">" : "<"}
			</Button>

			<div className={styles.items}>
				<AppLink
					theme={EAppLinkTheme.Secondary}
					to={RoutePath.main}
					className={styles.item}
				>
					<MainIcon className={styles.icon} />
					<span className={styles.link}>{tMain("Главная")}</span>
				</AppLink>

				<AppLink
					theme={EAppLinkTheme.Secondary}
					to={RoutePath.about}
					className={styles.item}
				>
					<AboutIcon className={styles.icon} />
					<span className={styles.link}>{tAbout("О сайте")}</span>
				</AppLink>
			</div>

			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} />
			</div>
		</div>
	);
};
