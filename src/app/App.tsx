import { ReactElement, Suspense } from "react";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRoute } from "app/providers/router";
import { classNames } from "shared/lib";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

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
