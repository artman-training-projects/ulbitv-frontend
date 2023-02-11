import { ReactElement } from "react";

import { classNames } from "shared/lib";

import { ILoaderProps } from "./interfaces";
import styles from "./Loader.module.scss";

const Loader = ({ className }: ILoaderProps): ReactElement => (
	<div className={classNames(styles.ldsEllipsis, {}, [className])}>
		<div />
		<div />
		<div />
		<div />
	</div>
);

export default Loader;
