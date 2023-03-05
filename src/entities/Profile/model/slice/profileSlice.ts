import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchProfileData } from "../services/fetchProfileData";
import { IProfile, IProfileSchema } from "../types/profile";

const initialState: IProfileSchema = {
	data: undefined,
	isLoading: false,
	error: undefined,
	readonly: true,
};

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProfileData.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(
			fetchProfileData.fulfilled,
			(state, action: PayloadAction<IProfile>) => {
				state.isLoading = false;
				state.data = action.payload;
			}
		);
		builder.addCase(fetchProfileData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload as string;
		});
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
