import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "shared/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";

import { AppRoute } from "./router";
import "./styles/index.scss";

const App = (): ReactElement => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<button onClick={toggleTheme}>Переключить тему</button>

			<Link to="/">Главная</Link>
			<Link to="/about">О сайте</Link>

			<AppRoute />
		</div>
	);
};

export default App;
