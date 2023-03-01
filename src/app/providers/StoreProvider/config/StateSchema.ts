import {
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from "@reduxjs/toolkit";

import { ILoginSchema } from "features/AuthByUsername";
import { IUserSchema } from "entities/User";

export interface IStateSchema {
	user: IUserSchema;
	loginForm?: ILoginSchema;
}

export type TStateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
	getReducerMap: () => ReducersMapObject<IStateSchema>;
	reduce: (state: IStateSchema, action: any) => CombinedState<IStateSchema>;
	add: (key: TStateSchemaKey, reducer: Reducer) => void;
	remove: (key: TStateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
	reducerManager: IReducerManager;
}

export interface ICreateReduxStore {
	initialState?: IStateSchema;
	asyncReducers?: ReducersMapObject<IStateSchema>;
}
