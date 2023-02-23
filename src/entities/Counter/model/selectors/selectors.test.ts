import { DeepPartial } from "@reduxjs/toolkit";

import { IStateSchema } from "app/providers/StoreProvider";

import { getCounter } from "./getCounter";
import { getCounterValue } from "./getCounterValue";

describe("Counter selectors", () => {
	let state: DeepPartial<IStateSchema>;

	beforeEach(() => {
		state = {
			counter: { value: 10 },
		};
	});

	test("getCounter should return counter value", () => {
		expect(getCounter(state as IStateSchema)).toEqual({ value: 10 });
	});

	test("getCounterValue should return counter value", () => {
		expect(getCounterValue(state as IStateSchema)).toEqual(10);
	});
});
