import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { userReducer } from "../../../entities/User";

import { IStateSchema } from "./StateSchema";

export function createReduxStore(initialState?: IStateSchema) {
	const rootReducers: ReducersMapObject<IStateSchema> = {
		user: userReducer,
	};

	return configureStore<IStateSchema>({
		preloadedState: initialState,
		reducer: rootReducers,
		devTools: __IS_DEV__,
	});
}
