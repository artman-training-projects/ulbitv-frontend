import { AsyncThunkAction } from "@reduxjs/toolkit";

export type TActionCreatorType<Return, Arg, Rejected> = (
	arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: Rejected }>;
