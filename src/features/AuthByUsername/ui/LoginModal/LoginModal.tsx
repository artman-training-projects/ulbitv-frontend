import { ReactElement, Suspense } from "react";

import { classNames } from "shared/lib";
import { Loader, Modal } from "shared/ui";

import { LoginFormAsync } from "../LoginForm/LoginForm.async";

import { ILoginModalProps } from "./interfaces";
import styles from "./LoginModal.module.scss";

export const LoginModal = ({
	className,
	isOpen,
	onClose,
}: ILoginModalProps): ReactElement => (
	<Modal
		className={classNames(styles.loginModal, {}, [className])}
		isOpen={isOpen}
		onCLose={onClose}
	>
		<Suspense fallback={<Loader />}>
			<LoginFormAsync />
		</Suspense>
	</Modal>
);
