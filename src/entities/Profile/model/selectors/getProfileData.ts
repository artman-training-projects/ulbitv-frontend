import { IStateSchema } from "app/providers/StoreProvider";

import { IProfile } from "../types/profile";

export const getProfileData = (state: IStateSchema): IProfile | undefined =>
	state.profile?.data;
