import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import { IStateSchema } from "app/providers/StoreProvider";

import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");
const axiosMock = jest.mocked(axios);

describe("AuthByUsername services", () => {
	describe("loginByUsername service", () => {
		test("success login", async () => {
			const userData = { username: "admin", id: "1" };
			axiosMock.post.mockReturnValue(Promise.resolve({ data: userData }));

			const thunk = new TestAsyncThunk(loginByUsername);
			const result = await thunk.callThunk({
				username: "admin",
				password: "1234",
			});

			expect(axiosMock.post).toHaveBeenCalled();
			expect(thunk.dispatch).toHaveBeenCalledWith(
				userActions.setAuthData(userData)
			);
			expect(thunk.dispatch).toHaveBeenCalledTimes(3);
			expect(result.payload).toEqual(userData);
			expect(result.meta.requestStatus).toBe("fulfilled");
		});

		test("error login", async () => {
			axiosMock.post.mockReturnValue(Promise.resolve({ status: 403 }));

			const thunk = new TestAsyncThunk(loginByUsername);
			const result = await thunk.callThunk({
				username: "admin",
				password: "0000",
			});

			expect(axiosMock.post).toHaveBeenCalled();
			expect(thunk.dispatch).toHaveBeenCalledTimes(2);
			expect(result.payload).toBe("Вы ввели неверный логин или пароль");
			expect(result.meta.requestStatus).toBe("rejected");
		});
	});
});
