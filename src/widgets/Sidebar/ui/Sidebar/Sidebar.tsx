import { ReactElement, useState } from "react";

import { classNames } from "shared/lib";
import { ThemeSwitcher } from "shared/ui";

import { ISidebarProps } from "./interfaces";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ className }: ISidebarProps): ReactElement => {
	const [collapsed, setCollapsed] = useState(false);

	const handleToggle = (): void => setCollapsed((prev) => !prev);

	return (
		<div
			className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
				className,
			])}
		>
			<button onClick={handleToggle}>toggle</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	);
};

export default Sidebar;
