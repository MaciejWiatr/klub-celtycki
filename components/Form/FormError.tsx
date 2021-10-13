import { FC } from "react";

interface IFormErrorProps {
	message: string;
}
export const FormError: FC<IFormErrorProps> = ({ message }) => {
	return <span className="text-red-500">{message}</span>;
};
