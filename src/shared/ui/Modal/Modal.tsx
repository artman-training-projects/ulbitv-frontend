import { ReactElement, useCallback, useEffect, useRef } from "react";

import { classNames } from "shared/lib";
import { Portal } from "shared/ui";

import { IModalProps } from "./interfaces";
import { ANIMATION_DELAY } from "./constants";
import styles from "./Modal.module.scss";

export const Modal = ({
	className,
	children,
	isOpen,
	onCLose,
}: IModalProps): ReactElement | null => {
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	const modalRef = useRef<HTMLDivElement>(null);

	const onCloseClick = useCallback(() => {
		if (onCLose) {
			modalRef.current.classList.add(styles.isClosing);
			timerRef.current = setTimeout(() => {
				onCLose();
				modalRef.current.classList.remove(styles.isClosing);
			}, ANIMATION_DELAY);
		}
	}, [onCLose]);

	const onContentClick = (event: any) => {
		event.stopPropagation();
	};

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onCloseClick();
			}
		};

		if (isOpen) {
			window.addEventListener("keydown", onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [onCloseClick, isOpen]);

	useEffect(() => {
		if (isOpen) {
			modalRef.current.classList.add(styles.opened);
		}
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	return (
		<Portal>
			<div ref={modalRef} className={classNames(styles.modal, {}, [className])}>
				<div className={styles.overlay} onClick={onCloseClick}>
					<div className={styles.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
