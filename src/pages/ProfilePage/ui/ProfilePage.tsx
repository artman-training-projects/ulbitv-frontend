import { memo, ReactElement, useEffect } from "react";

import {
	fetchProfileData,
	ProfileCard,
	profileReducer,
} from "entities/Profile";
import { useAppDispatch } from "shared/hooks/useAppDispatch";

import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";

const reducers: TReducersList = {
	profile: profileReducer,
};

const ProfilePage = memo((): ReactElement => {
	const dispatch = useAppDispatch();

	useDynamicReducersLoader({ reducers, removeAfterUnmount: true });

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<div>
			<ProfileCard />
		</div>
	);
});

export default ProfilePage;
