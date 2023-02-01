import { ReactElement, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import { useTheme } from "shared/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";

import "./styles/index.scss";

const App = (): ReactElement => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<button onClick={toggleTheme}>Переключить тему</button>

			<Link to="/">Главная</Link>
			<Link to="/about">О сайте</Link>

			<Suspense fallback={<div>Loading ...</div>}>
				<Routes>
					<Route path="/about" element={<AboutPage />} />
					<Route path="/" element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
