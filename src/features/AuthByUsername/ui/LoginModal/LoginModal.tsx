import { ReactElement } from "react";

import { classNames } from "shared/lib";
import { Modal } from "shared/ui";

import { LoginForm } from "../LoginForm/LoginForm";

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
		<LoginForm />
	</Modal>
);
