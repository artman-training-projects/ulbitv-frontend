import { IStateSchema } from "app/providers/StoreProvider";

export const getLoginIsLoading = (state: IStateSchema) =>
	state?.loginForm?.isLoading || false;
