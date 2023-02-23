import { Component, ErrorInfo, Suspense } from "react";

import { PageError } from "widgets/PageError";

import { IErrorBoundaryProps, IErrorBoundaryState } from "./interfaces";

export class ErrorBoundary extends Component<
	IErrorBoundaryProps,
	IErrorBoundaryState
> {
	constructor(props: IErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	// Update state so the next render will show the fallback UI.
	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	// You can also log the error to an error reporting service
	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// logErrorToMyService(error, errorInfo);
		console.log(error, errorInfo);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			// You can render any custom fallback UI
			return (
				<Suspense fallback="">
					<PageError />
				</Suspense>
			);
		}

		return children;
	}
}
