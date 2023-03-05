import { profileReducer } from "entities/Profile";
import { memo, ReactElement } from "react";
import { useTranslation } from "react-i18next";

import {
	TReducersList,
	useDynamicReducersLoader,
} from "shared/hooks/useDynamicReducersLoader";

const reducers: TReducersList = {
	profile: profileReducer,
};

const ProfilePage = memo((): ReactElement => {
	const { t } = useTranslation("profile");
	useDynamicReducersLoader({ reducers, removeAfterUnmount: true });

	return <div>{t("Профиль")}</div>;
});

export default ProfilePage;
