import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "entities/Counter";

import { IStateSchema } from "./StateSchema";

export function createReduxStore(initialState?: IStateSchema) {
	return configureStore<IStateSchema>({
		preloadedState: initialState,
		reducer: {
			counter: counterReducer,
		},
		devTools: __IS_DEV__,
	});
}
