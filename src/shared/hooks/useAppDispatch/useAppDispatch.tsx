import { useDispatch } from "react-redux";

import { TAppDispatch } from "app/providers/StoreProvider";

export const useAppDispatch = () => useDispatch<TAppDispatch>();
