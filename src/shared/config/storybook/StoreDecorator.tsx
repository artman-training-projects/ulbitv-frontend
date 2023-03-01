/* eslint-disable indent */
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";

import { IStateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const initAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
	loginForm: loginReducer,
};

export const StoreDecorator =
	(
		state: DeepPartial<IStateSchema>,
		asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
	) =>
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
