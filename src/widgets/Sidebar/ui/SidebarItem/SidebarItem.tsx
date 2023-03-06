import { memo, ReactElement } from "react";

import { classNames } from "shared/lib";
import { AppLink, EAppLinkTheme } from "shared/ui";

import styles from "./SidebarItem.module.scss";
import { ISidebarItemProps } from "./interfaces";

export const SidebarItem = memo(
	({ item, collapsed }: ISidebarItemProps): ReactElement => {
		const { icon: Icon, path, text } = item;

		return (
			<AppLink
				theme={EAppLinkTheme.Secondary}
				to={path}
				className={classNames(styles.item, { [styles.collapsed]: collapsed })}
			>
				<Icon className={styles.icon} />
				<span className={styles.link}>{text}</span>
			</AppLink>
		);
	}
);
