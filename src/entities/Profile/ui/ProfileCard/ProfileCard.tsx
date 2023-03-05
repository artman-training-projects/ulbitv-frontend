import { ReactElement } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib";
import { Button, EButtonTheme, Text } from "shared/ui";

import { getProfileData } from "../../model/selectors/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading";

import { IProfileCardProps } from "./interfaces";
import styles from "./ProfileCard.module.scss";

const ProfileCard = ({ className = "" }: IProfileCardProps): ReactElement => {
	const data = useSelector(getProfileData);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);

	return (
		<div className={classNames(styles.profileCard, {}, [className])}>
			<div className={styles.header}>
				<Text title="Профиль" />
				<Button theme={EButtonTheme.Outline} className={styles.editButton}>
					Редактировать
				</Button>
			</div>

			<div className={styles.data}>
				<input
					type="text"
					value={data?.first}
					placeholder="Ваше имя"
					className={styles.input}
				/>
				<input
					type="text"
					value={data?.lastname}
					placeholder="Ваша фамилия"
					className={styles.input}
				/>
			</div>
		</div>
	);
};

export default ProfileCard;
