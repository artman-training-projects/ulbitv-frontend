import {
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { AxiosInstance } from "axios";

import { ILoginSchema } from "features/AuthByUsername";
import { IUserSchema } from "entities/User";
import { IProfileSchema } from "entities/Profile";

export interface IStateSchema {
	user: IUserSchema;
	loginForm?: ILoginSchema;
	profile?: IProfileSchema;
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
	navigate?: NavigateFunction;
}

export interface IThunkExtraArgs {
	api: AxiosInstance;
	navigate?: NavigateFunction;
}

export interface IThunkConfig<T> {
	rejectValue: T;
	extra: IThunkExtraArgs;
}
