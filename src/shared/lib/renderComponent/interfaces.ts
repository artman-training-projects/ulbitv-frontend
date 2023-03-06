import { IStateSchema } from "app/providers/StoreProvider";

export interface IRenderOptions {
	route?: string;
	initialState?: DeepPartial<IStateSchema>;
}
