import { FC, memo } from "react";

import UI from "@/shared/UI";

import s from "./UserProfilePanel.module.scss";

interface IUserProfilePanelProps {
	name: string;
	description: string;
}

export const UserProfilePanel: FC<IUserProfilePanelProps> = memo(
	({ name, description }) => {
		return (
			<div className={s.UserProfilePanel}>
				<UI.Avatar />
				<div className={s.info}>
					<p className={s.name}>{name}</p>
					<p className={s.description}>{description}</p>
				</div>
			</div>
		);
	},
);
