import { DeepPartial } from "@reduxjs/toolkit";

import { ICounterSchema } from "../types/counterSchema";
import { counterReducer, counterActions } from "./counterSlice";

describe("Counter slice", () => {
	let state: DeepPartial<ICounterSchema>;

	beforeEach(() => {
		state = { value: 10 };
	});

	test("counterActions.increment should return counter value with empty state", () => {
		expect(counterReducer(undefined, counterActions.increment)).toEqual({
			value: 1,
		});
	});

	test("counterActions.increment should return counter value", () => {
		expect(
			counterReducer(state as ICounterSchema, counterActions.increment)
		).toEqual({ value: 11 });
	});

	test("counterActions.decrement should return counter value", () => {
		expect(
			counterReducer(state as ICounterSchema, counterActions.decrement)
		).toEqual({ value: 9 });
	});
});
