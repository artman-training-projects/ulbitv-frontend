import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./index.scss";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";

const App = () => {
	return (
		<div className="app">
			<Link to="/">Главная</Link>
			<Link to="/about">О сайте</Link>

			<Suspense fallback={<div>Loading ...</div>}>
				<Routes>
					<Route path="/about" element={<AboutPageLazy />} />
					<Route path="/" element={<MainPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
