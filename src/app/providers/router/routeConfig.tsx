import { RouteProps } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";

import { EAppRoutes } from "./interfaces";
import { RoutePath } from "./routePath";

export const routeConfig: Record<EAppRoutes, RouteProps> = {
	[EAppRoutes.Main]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[EAppRoutes.About]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[EAppRoutes.Profile]: {
		path: RoutePath.profile,
		element: <ProfilePage />,
	},
	[EAppRoutes.NotFound]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
