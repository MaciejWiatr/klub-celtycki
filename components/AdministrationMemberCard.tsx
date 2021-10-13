import { FC } from "react";

interface IProps {
	name: string;
	title: string;
	contact?: string;
}

const AdministrationMemberCard: FC<IProps> = ({ name, title, contact }) => {
	return (
		<div>
			<p className="font-semibold">
				{name} - {title}
			</p>
			<p>{contact}</p>
		</div>
	);
};

export default AdministrationMemberCard;
