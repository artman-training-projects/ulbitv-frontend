import { ReactElement, useState } from "react";

import { classNames } from "shared/lib";
import { LangSwitcher, ThemeSwitcher } from "shared/ui";

import { ISidebarProps } from "./interfaces";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ className }: ISidebarProps): ReactElement => {
	const [collapsed, setCollapsed] = useState(false);

	const handleToggle = (): void => setCollapsed((prev) => !prev);

	return (
		<div
			data-testid="Sidebar"
			className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
				className,
			])}
		>
			<button data-testid="Sidebar-toggle" type="button" onClick={handleToggle}>
				toggle
			</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};

export default Sidebar;
