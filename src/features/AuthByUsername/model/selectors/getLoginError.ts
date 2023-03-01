import { IStateSchema } from "app/providers/StoreProvider";

export const getLoginError = (state: IStateSchema) => state?.loginForm?.error;
