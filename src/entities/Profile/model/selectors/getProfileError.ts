import { IStateSchema } from "app/providers/StoreProvider";

export const getProfileError = (state: IStateSchema): string =>
	state.profile?.error || "";
