import { ReactElement } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IStoreProviderProps } from "./interfaces";
import { createReduxStore } from "./config/store";

export const StoreProvider = ({
	children,
	initialState,
	asyncReducers,
}: IStoreProviderProps): ReactElement => {
	const store = createReduxStore({
		initialState,
		asyncReducers,
		navigate: useNavigate(),
	});

	return <Provider store={store}>{children}</Provider>;
};
