import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib";
import { loginByUsername } from "./loginByUsername";

describe("AuthByUsername services", () => {
	describe("loginByUsername service", () => {
		test("success login", async () => {
			const userData = { username: "admin", id: "1" };
			const thunk = new TestAsyncThunk(loginByUsername);
			thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

			const result = await thunk.callThunk({
				username: "admin",
				password: "1234",
			});

			expect(thunk.api.post).toHaveBeenCalled();
			expect(thunk.dispatch).toHaveBeenCalledWith(
				userActions.setAuthData(userData)
			);
			expect(thunk.dispatch).toHaveBeenCalledTimes(3);
			expect(result.payload).toEqual(userData);
			expect(result.meta.requestStatus).toBe("fulfilled");
		});

		test("error login", async () => {
			const thunk = new TestAsyncThunk(loginByUsername);
			thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

			const result = await thunk.callThunk({
				username: "admin",
				password: "0000",
			});

			expect(thunk.api.post).toHaveBeenCalled();
			expect(thunk.dispatch).toHaveBeenCalledTimes(2);
			expect(result.payload).toBe("Вы ввели неверный логин или пароль");
			expect(result.meta.requestStatus).toBe("rejected");
		});
	});
});
