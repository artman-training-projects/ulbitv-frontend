/* eslint-disable indent */
import { ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";

import { IStateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { TReducersList } from "shared/hooks/useDynamicReducersLoader";

const initAsyncReducers: TReducersList = {
	loginForm: loginReducer,
};

export const StoreDecorator =
	(state: DeepPartial<IStateSchema>, asyncReducers?: TReducersList) =>
	(StoryComponent: Story) =>
		(
			<StoreProvider
				initialState={state as IStateSchema}
				asyncReducers={
					{
						...initAsyncReducers,
						...asyncReducers,
					} as ReducersMapObject<IStateSchema>
				}
			>
				<StoryComponent />
			</StoreProvider>
		);
