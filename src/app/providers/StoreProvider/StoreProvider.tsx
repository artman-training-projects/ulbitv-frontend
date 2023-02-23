import { ReactElement } from "react";
import { Provider } from "react-redux";

import { IStoreProviderProps } from "./interfaces";
import { createReduxStore } from "./store";

export const StoreProvider = ({
	children,
	initialState,
}: IStoreProviderProps): ReactElement => {
	const store = createReduxStore(initialState);

	return <Provider store={store}>{children}</Provider>;
};
