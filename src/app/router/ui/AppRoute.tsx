import { ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "../config/routeConfig";

const AppRoute = (): ReactElement => {
	return (
		<Suspense fallback={<div>Loading ...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route path={path} element={element} key={path} />
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRoute;
