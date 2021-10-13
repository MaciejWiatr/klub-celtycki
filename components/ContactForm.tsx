import { FC } from "react";
import InputType from "../ts/InputType";
import { useForm } from "react-hook-form";
import clsx from "clsx";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	console.log(watch());

	return (
		<div className="w-full md:w-1/3">
			<h1 className="font-mont text-3xl font-bold">
				Skontaktuj się z nami
			</h1>
			<form className="pt-4 space-y-4">
				<FormInput
					label="Imię i nazwisko"
					name="name"
					type="text"
					register={register}
				/>
				<FormInput
					label="Adres email"
					name="email"
					type="text"
					register={register}
				/>
				<label>
					<p className="mb-2">Wiadomość</p>
					<textarea
						rows={6}
						name="message"
						className="rounded-lg border-gray-300 w-full ring-primary-blue"
					></textarea>
				</label>
				<button
					type="submit"
					className="w-full text-white font-semibold p-3 pr-5 pl-5 rounded-md cursor-pointer select-none bg-primary-orange"
				>
					Wyślij wiadomość
				</button>
			</form>
		</div>
	);
};

interface IFormInputProps {
	label: string;
	name: string;
	type: InputType;
	defaultValue?: string;
	register: any;
	className?: string;
}

const FormInput: FC<IFormInputProps> = ({
	label,
	name,
	type,
	register,
	defaultValue,
	className,
}) => {
	return (
		<label>
			<p className="mb-1">{label}</p>
			<input
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

export default ContactForm;
