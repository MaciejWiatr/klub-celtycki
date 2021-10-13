import { FC } from "react";
import clsx from "clsx";
import InputType from "../../ts/InputType";

interface IFormInputProps {
	label: string;
	name: string;
	type: InputType;
	defaultValue?: string;
	register: any;
	className?: string;
	placeholder?: string;
}

export const FormInput: FC<IFormInputProps> = ({
	label,
	name,
	type,
	register,
	defaultValue,
	className,
	placeholder,
}) => {
	return (
		<label>
			<p className="mb-1 mt-3">{label}</p>
			<input
				placeholder={placeholder}
				defaultValue={defaultValue}
				type={type}
				name={name}
				{...register(name, { required: true })}
				className={clsx(
					"rounded-lg border-gray-300 w-full ring-primary-blue",
					className
				)}
			/>
		</label>
	);
};
