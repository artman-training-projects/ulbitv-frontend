import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

import { IReduxStoreWithManager } from "app/providers/StoreProvider";

import { IDynamicModuleLoader, TReducersListEntry } from "./interfaces";

export const useDynamicReducersLoader = ({
	reducers,
	removeAfterUnmount,
}: IDynamicModuleLoader): void => {
	const dispatch = useDispatch();
	const store = useStore() as IReduxStoreWithManager;

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: TReducersListEntry) => {
			store.reducerManager.add(name, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(
					([name, reducer]: TReducersListEntry) => {
						store.reducerManager.add(name, reducer);
						dispatch({ type: `@INIT ${name} reducer` });
					}
				);
			}
		};
		// eslint-disable-next-line
	}, []);
};
