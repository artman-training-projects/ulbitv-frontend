import { useEffect } from "react";
import { useStore } from "react-redux";

import { IReduxStoreWithManager } from "app/providers/StoreProvider";

import { TStateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { IDynamicModuleLoader } from "./interfaces";
import { useAppDispatch } from "../useAppDispatch";

export const useDynamicReducersLoader = ({
	reducers,
	removeAfterUnmount,
}: IDynamicModuleLoader): void => {
	const dispatch = useAppDispatch();
	const store = useStore() as IReduxStoreWithManager;

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]) => {
			store.reducerManager.add(name as TStateSchemaKey, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, reducer]) => {
					store.reducerManager.add(name as TStateSchemaKey, reducer);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
		// eslint-disable-next-line
	}, []);
};
