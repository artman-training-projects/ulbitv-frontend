import axios, { AxiosStatic } from "axios";

import { IStateSchema } from "app/providers/StoreProvider";

import { TActionCreatorType } from "./interfaces";

jest.mock("axios");

export class TestAsyncThunk<Return, Arg, Rejected> {
	actionCreator: TActionCreatorType<Return, Arg, Rejected>;

	dispatch: jest.MockedFn<any>;

	getState: () => IStateSchema;

	api: jest.MockedFunctionDeep<AxiosStatic>;

	navigate: jest.MockedFn<any>;

	constructor(actionCreator: TActionCreatorType<Return, Arg, Rejected>) {
		this.actionCreator = actionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
		this.api = jest.mocked(axios);
		this.navigate = jest.fn();
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreator(arg);
		const result = await action(this.dispatch, this.getState, {
			api: this.api,
			navigate: this.navigate,
		});
		return result;
	}
}
