import { ReactElement } from "react";

import { classNames } from "shared/lib";
import { Loader } from "shared/ui";

import { IPageLoaderProps } from "./interfaces";
import styles from "./PageLoader.module.scss";

const PageLoader = ({ className }: IPageLoaderProps): ReactElement => (
	<div className={classNames(styles.notFound, {}, [className])}>
		<Loader />
	</div>
);

export default PageLoader;
