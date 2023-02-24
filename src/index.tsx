import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "app/App";
import { StoreProvider } from "app/providers/StoreProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { ThemeProvider } from "app/providers/ThemeProvider";

import "app/styles/index.scss";
import "shared/config/i18n/i18n";

const root = createRoot(document.getElementById("root"));
root.render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>
);
