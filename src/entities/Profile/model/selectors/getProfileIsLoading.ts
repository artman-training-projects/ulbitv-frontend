import { IStateSchema } from "app/providers/StoreProvider";

export const getProfileIsLoading = (state: IStateSchema): boolean =>
	state.profile?.isLoading || false;
