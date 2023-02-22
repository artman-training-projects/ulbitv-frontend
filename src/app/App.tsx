import { ReactElement, Suspense } from "react";

import { useTheme } from "shared/providers/ThemeProvider";
import { classNames } from "shared/lib";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import AppRoute from "./router/AppRoute";

const App = (): ReactElement => {
	const { theme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="">
				<Navbar />

				<div className="content-page">
					<Sidebar />
					<AppRoute />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
