import clsx from "clsx";
import { Navbar } from "./Navbar";

const SectionHeader = ({
	title,
	description = "",
	img,
	isQuote = false,
	quoteAuthor = "",
}) => {
	return (
		<header className="w-full bg-secondary-blue relative p-8 text-white flex justify-center">
			<div className="max-w-6xl w-full z-50">
				<Navbar />
				<div className="mt-16 mb-16 md:mt-24 md:mb-24">
					<h1 className="text-4xl md:text-6xl font-bold font-mont">
						{title}
					</h1>
					<div
						className={clsx(
							"max-w-full w-full md:w-1/2 mt-8 leading-loose text-md md:text-xl font-light",
							{
								italic: isQuote,
							}
						)}
					>
						{description.split("\\n").map((line) => (
							<p>{line}</p>
						))}
					</div>
					{isQuote && (
						<p className="font-semibold text-md md:text-xl mt-2">
							~ {quoteAuthor}
						</p>
					)}
				</div>
			</div>
			<img
				className="absolute object-cover w-full h-full top-0 left-0 opacity-20"
				alt="banner sekcji"
				src={img}
			/>
		</header>
	);
};

export default SectionHeader;
