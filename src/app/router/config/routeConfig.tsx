import { RouteProps } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";

export enum EAppRoutes {
	Main = "main",
	About = "about",
	NotFound = "not_found",
}

export const RoutePath: Record<EAppRoutes, string> = {
	[EAppRoutes.Main]: "/",
	[EAppRoutes.About]: "/about",
	[EAppRoutes.NotFound]: "*",
};

export const routeConfig: Record<EAppRoutes, RouteProps> = {
	[EAppRoutes.Main]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[EAppRoutes.About]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[EAppRoutes.NotFound]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
