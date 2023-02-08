import { ReactElement } from "react";

import { useTheme } from "shared/providers";
import { classNames } from "shared/lib";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { AppRoute } from "./router";
import "./styles/index.scss";

const App = (): ReactElement => {
	const { theme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<Navbar />

			<div className="content-page">
				<Sidebar />
				<AppRoute />
			</div>
		</div>
	);
};

export default App;
