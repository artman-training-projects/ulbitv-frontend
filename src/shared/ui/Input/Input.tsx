import { ChangeEvent, memo, ReactElement } from "react";

import { classNames } from "shared/lib";

import { IInputProps } from "./interfaces";
import styles from "./Input.module.scss";

export const Input = memo(
	({
		className = "",
		value,
		type = "text",
		onChange,
		...otherProps
	}: IInputProps): ReactElement => {
		const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
			onChange?.(event.target.value);
		};

		return (
			<input
				className={classNames(styles.button, {}, [className])}
				type={type}
				value={value}
				onChange={onChangeValue}
				{...otherProps}
			/>
		);
	}
);
