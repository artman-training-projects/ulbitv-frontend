import { DeepPartial } from "@reduxjs/toolkit";

import { ILoginSchema } from "../types/loginSchema";

import { loginActions, loginReducer } from "./loginSlice";

describe("AuthByUsername slice", () => {
	describe("loginSlice slice", () => {
		test("test set username", () => {
			const state: DeepPartial<ILoginSchema> = { username: "admin" };
			expect(
				loginReducer(state as ILoginSchema, loginActions.setUsername("user"))
			).toEqual({ username: "user" });
		});

		test("test set password", () => {
			const state: DeepPartial<ILoginSchema> = { password: "0000" };
			expect(
				loginReducer(state as ILoginSchema, loginActions.setPassword("1234"))
			).toEqual({ password: "1234" });
		});
	});
});
