import { ReactNode } from "react";
import { ReducersMapObject } from "@reduxjs/toolkit";

import { IStateSchema } from "./config/StateSchema";

export interface IStoreProviderProps {
	children?: ReactNode;
	initialState?: IStateSchema;
	asyncReducers?: ReducersMapObject<IStateSchema>;
}
