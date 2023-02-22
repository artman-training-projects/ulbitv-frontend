import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

import { classNames } from "shared/lib";
import { Portal } from "shared/ui";

import { IModalProps } from "./interfaces";
import { ANIMATION_DELAY } from "./constants";
import styles from "./Modal.module.scss";

const Modal = ({
	className,
	children,
	isOpen,
	onCLose,
}: IModalProps): ReactElement => {
	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const mods: Record<string, boolean> = {
		[styles.opened]: isOpen,
		[styles.isClosing]: isClosing,
	};

	const handleClose = useCallback(() => {
		if (onCLose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onCLose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onCLose]);

	const handleContent = (event: any) => {
		event.stopPropagation();
	};

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				handleClose();
			}
		};

		if (isOpen) {
			window.addEventListener("keydown", onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [handleClose, isOpen]);

	return (
		<Portal>
			<div className={classNames(styles.modal, mods, [className])}>
				<div className={styles.overlay} onClick={handleClose}>
					<div className={styles.content} onClick={handleContent}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
