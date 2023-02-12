import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "app/App";
import { ErrorBoundary, ThemeProvider } from "shared/providers";

import "shared/config/i18n/i18n";

render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById("root")
);
