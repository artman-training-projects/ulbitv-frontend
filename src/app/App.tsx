import { ReactElement } from "react";

import { useTheme } from "shared/providers/ThemeProvider";
import { classNames } from "shared/lib";
import { Navbar } from "widgets/Navbar";

import { AppRoute } from "./router";
import "./styles/index.scss";

const App = (): ReactElement => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<button onClick={toggleTheme}>Переключить тему</button>
			<Navbar />
			<AppRoute />
		</div>
	);
};

export default App;
