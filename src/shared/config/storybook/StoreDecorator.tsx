import { DeepPartial } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";

import { IStateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator =
	(state: DeepPartial<IStateSchema>) => (StoryComponent: Story) =>
		(
			<StoreProvider initialState={state as IStateSchema}>
				<StoryComponent />
			</StoreProvider>
		);
