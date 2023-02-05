import { RouteProps } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export enum EAppRoutes {
	Main = "main",
	About = "about",
}

export const RoutePath: Record<EAppRoutes, string> = {
	[EAppRoutes.Main]: "/",
	[EAppRoutes.About]: "/about",
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
};
