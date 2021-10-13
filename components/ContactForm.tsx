import { useForm } from "react-hook-form";
import { FormInput } from "./Form/FormInput";
import { FormError } from "./Form/FormError";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<div className="w-full md:w-1/3">
			<h1 className="font-mont text-3xl font-bold">
				Skontaktuj się z nami
			</h1>
			<form className="pt-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
				<FormInput
					label="Imię i nazwisko"
					name="name"
					type="text"
					placeholder="Wpisz imię i nazwisko"
					register={register}
				/>
				{errors.name && <FormError message="To pole jest wymagane" />}
				<FormInput
					label="Adres email"
					name="email"
					type="text"
					placeholder="Wpisz swój adres email"
					register={register}
				/>
				{errors.name && <FormError message="To pole jest wymagane" />}
				<label>
					<p className="mb-1 mt-3">Wiadomość</p>
					<textarea
						rows={6}
						name="message"
						placeholder="Wpisz swoją wiadomość"
						className="rounded-lg border-gray-300 w-full ring-primary-blue"
						{...register("message", { required: true })}
					></textarea>
				</label>
				{errors.name && <FormError message="To pole jest wymagane" />}
				<button
					type="submit"
					className="w-full text-white font-semibold p-3 pr-5 pl-5 rounded-md cursor-pointer select-none bg-primary-orange hover:bg-primary-blue transition"
				>
					Wyślij wiadomość
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
