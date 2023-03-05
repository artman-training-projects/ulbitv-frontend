import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { userReducer } from "entities/User";
import { api } from "shared/api/api";

import { ICreateReduxStore, IStateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

export function createReduxStore({
	asyncReducers,
	initialState,
	navigate,
}: ICreateReduxStore) {
	const rootReducers: ReducersMapObject<IStateSchema> = {
		...asyncReducers,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore<IStateSchema>({
		preloadedState: initialState,
		/** @ts-ignore */
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		/** @ts-ignore */
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api,
						navigate,
					},
				},
			}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type TAppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
