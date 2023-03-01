import { IStateSchema } from "app/providers/StoreProvider";

export const getLoginPassword = (state: IStateSchema) =>
	state?.loginForm?.password || "";
