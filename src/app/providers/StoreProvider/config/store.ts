import {
	CombinedState,
	configureStore,
	Reducer,
	ReducersMapObject,
} from "@reduxjs/toolkit";

import { userReducer } from "entities/User";
import { api } from "shared/api/api";

import {
	ICreateReduxStore,
	IStateSchema,
	IThunkExtraArgs,
} from "./StateSchema";
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
		reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
		devTools: __IS_DEV__,
		/** @ts-ignore */
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api,
						navigate,
					} as IThunkExtraArgs,
				},
			}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type TAppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
