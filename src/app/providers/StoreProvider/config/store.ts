import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { userReducer } from "entities/User";

import { ICreateReduxStore, IStateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

export function createReduxStore({
	asyncReducers,
	initialState,
}: ICreateReduxStore) {
	const rootReducers: ReducersMapObject<IStateSchema> = {
		...asyncReducers,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore<IStateSchema>({
		preloadedState: initialState,
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}
