import { IStateSchema } from "app/providers/StoreProvider";

import { TActionCreatorType } from "./interfaces";

export class TestAsyncThunk<Return, Arg, Rejected> {
	actionCreator: TActionCreatorType<Return, Arg, Rejected>;

	dispatch: jest.MockedFn<any>;

	getState: () => IStateSchema;

	constructor(actionCreator: TActionCreatorType<Return, Arg, Rejected>) {
		this.actionCreator = actionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg);
		const result = await action(this.dispatch, this.getState, undefined);
		return result;
	}
}
