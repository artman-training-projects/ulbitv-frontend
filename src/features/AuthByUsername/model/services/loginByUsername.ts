import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { USER_LOCALSTORAGE_KEY } from "shared/constants/localStorage";

import { IUser, userActions } from "entities/User";

interface ILoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps>(
	"login/loginByUsername",
	async (authData, thunkAPI) => {
		try {
			const response = await axios.post(
				"http://localhost:8000/login",
				authData
			);

			if (!response.data) {
				throw new Error("something wrong");
			}

			localStorage.setItem(
				USER_LOCALSTORAGE_KEY,
				JSON.stringify(response.data)
			);
			thunkAPI.dispatch(userActions.setAuthData(response.data));

			return response.data;
		} catch (error) {
			console.error(error);
			return thunkAPI.rejectWithValue("Вы ввели неверный логин или пароль");
		}
	}
);
