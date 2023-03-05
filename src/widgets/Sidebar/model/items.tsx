import { SVGProps, VFC } from "react";

import { routeConfig } from "app/providers/router";

import { AboutIcon, MainIcon, ProfileIcon } from "shared/assets/icons";

export interface ISidebarItem {
	path: string;
	text: string;
	icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: ISidebarItem[] = [
	{
		icon: MainIcon,
		path: routeConfig.main.path,
		text: "Главная",
	},
	{
		icon: AboutIcon,
		path: routeConfig.about.path,
		text: "О сайте",
	},
	{
		icon: ProfileIcon,
		path: routeConfig.profile.path,
		text: "Профиль",
	},
];
