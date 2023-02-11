import { ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "widgets/PageLoader";

import { routeConfig } from "../config/routeConfig";

const AppRoute = (): ReactElement => (
	<Suspense fallback={<PageLoader />}>
		<Routes>
			{Object.values(routeConfig).map(({ path, element }) => (
				<Route
					path={path}
					element={<div className="page-wrapper">{element}</div>}
					key={path}
				/>
			))}
		</Routes>
	</Suspense>
);

export default AppRoute;
