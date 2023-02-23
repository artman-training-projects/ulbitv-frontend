import { createSelector } from "@reduxjs/toolkit";

import { getCounter } from "./getCounter";

export const getCounterValue = createSelector(
	getCounter,
	(counter) => counter.value
);
