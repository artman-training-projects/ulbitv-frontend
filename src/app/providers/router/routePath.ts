import { EAppRoutes } from "./interfaces";

export const RoutePath: Record<EAppRoutes, string> = {
	[EAppRoutes.Main]: "/",
	[EAppRoutes.About]: "/about",
	[EAppRoutes.Profile]: "/profile",
	[EAppRoutes.NotFound]: "*",
};
