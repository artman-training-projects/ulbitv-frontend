import { ReactElement } from "react";

import { classNames } from "shared/lib";
import { Loader } from "shared/ui";

import { IPageLoaderProps } from "./interfaces";
import styles from "./PageLoader.module.scss";

export const PageLoader = ({
	className = "",
}: IPageLoaderProps): ReactElement => (
	<div className={classNames(styles.pageLoader, {}, [className])}>
		<Loader />
	</div>
);
