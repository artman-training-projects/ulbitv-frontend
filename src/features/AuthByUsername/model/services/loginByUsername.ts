import { createAsyncThunk } from "@reduxjs/toolkit";

import { USER_LOCALSTORAGE_KEY } from "shared/constants/localStorage";
import { IUser, userActions } from "entities/User";
import { IThunkConfig } from "app/providers/StoreProvider";

interface ILoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<
	IUser,
	ILoginByUsernameProps,
	IThunkConfig<string>
>(
	"login/loginByUsername",
	async (authData, { dispatch, extra, rejectWithValue }) => {
		try {
			const response = await extra.api.post<IUser>("/login", authData);

			if (!response.data) {
				throw new Error("something wrong");
			}

			localStorage.setItem(
				USER_LOCALSTORAGE_KEY,
				JSON.stringify(response.data)
			);

			dispatch(userActions.setAuthData(response.data));
			extra.navigate("/profile");

			return response.data;
		} catch (error) {
			console.error(error);
			return rejectWithValue("Вы ввели неверный логин или пароль");
		}
	}
);
