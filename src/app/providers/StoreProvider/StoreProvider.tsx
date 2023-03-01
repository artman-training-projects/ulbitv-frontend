import { ReactElement } from "react";
import { Provider } from "react-redux";

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
	});

	return <Provider store={store}>{children}</Provider>;
};
