import { ReactNode } from "react";
import { IStateSchema } from "./StateSchema";

export interface IStoreProviderProps {
	children?: ReactNode;
	initialState?: IStateSchema;
}
