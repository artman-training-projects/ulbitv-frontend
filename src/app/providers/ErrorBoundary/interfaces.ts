import { ReactNode } from "react";

export interface IErrorBoundaryProps {
	children: ReactNode;
}

export interface IErrorBoundaryState {
	hasError: boolean;
}
