import { createSlice } from "@reduxjs/toolkit";

import { loginByUsername } from "../services/loginByUsername";
import { ILoginSchema } from "../types/loginSchema";

const initialState: ILoginSchema = {
	password: "",
	username: "",
	isLoading: false,
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setUsername: (state, actions) => {
			state.username = actions.payload;
		},
		setPassword: (state, actions) => {
			state.password = actions.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginByUsername.pending, (state, action) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(loginByUsername.fulfilled, (state, action) => {
			state.isLoading = false;
		});
		builder.addCase(loginByUsername.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload as string;
		});
	},
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
