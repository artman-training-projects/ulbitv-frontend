import { ReactNode } from "react";

export interface IModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onCLose?: () => void;
}
