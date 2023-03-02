import { DeepPartial } from "@reduxjs/toolkit";

import { IStateSchema } from "app/providers/StoreProvider";

import { getLoginError } from "./getLoginError";
import { getLoginIsLoading } from "./getLoginIsLoading";
import { getLoginPassword } from "./getLoginPassword";
import { getLoginUsername } from "./getLoginUsername";

describe("AuthByUsername selectors", () => {
	describe("getLoginError selector", () => {
		test("should return error", () => {
			const state: DeepPartial<IStateSchema> = {
				loginForm: {
					error: "error",
				},
			};

			expect(getLoginError(state as IStateSchema)).toEqual("error");
		});

		test("should work with empty state", () => {
			const state: DeepPartial<IStateSchema> = {};

			expect(getLoginError(state as IStateSchema)).toEqual(undefined);
		});
	});

	describe("getLoginIsLoading selector", () => {
		test("should return true", () => {
			const state: DeepPartial<IStateSchema> = {
				loginForm: {
					isLoading: true,
				},
			};

			expect(getLoginIsLoading(state as IStateSchema)).toEqual(true);
		});

		test("should work with empty state", () => {
			const state: DeepPartial<IStateSchema> = {};

			expect(getLoginIsLoading(state as IStateSchema)).toEqual(false);
		});
	});

	describe("getLoginPassword selector", () => {
		test("should return value", () => {
			const state: DeepPartial<IStateSchema> = {
				loginForm: {
					password: "1234",
				},
			};

			expect(getLoginPassword(state as IStateSchema)).toEqual("1234");
		});

		test("should work with empty state", () => {
			const state: DeepPartial<IStateSchema> = {};

			expect(getLoginPassword(state as IStateSchema)).toEqual("");
		});
	});

	describe("getLoginUsername selector", () => {
		test("should return value", () => {
			const state: DeepPartial<IStateSchema> = {
				loginForm: {
					username: "admin",
				},
			};

			expect(getLoginUsername(state as IStateSchema)).toEqual("admin");
		});

		test("should work with empty state", () => {
			const state: DeepPartial<IStateSchema> = {};

			expect(getLoginUsername(state as IStateSchema)).toEqual("");
		});
	});
});
