import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "app/providers/StoreProvider";

import { IProfile } from "../types/profile";

export const fetchProfileData = createAsyncThunk<
	IProfile,
	void,
	IThunkConfig<string>
>("profile/fetchProfileData", async (_, { extra, rejectWithValue }) => {
	try {
		const response = await extra.api.get<IProfile>("/profile");

		if (!response.data) {
			throw new Error("something wrong");
		}

		return response.data;
	} catch (error) {
		console.error(error);
		return rejectWithValue("error");
	}
});
