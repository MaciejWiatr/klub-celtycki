import { Navbar } from "./Navbar";

const SectionHeader = ({ title, description, img }) => {
	return (
		<header className="w-full bg-secondary-blue relative p-8 text-white flex justify-center">
			<div className="max-w-6xl w-full z-50">
				<Navbar />
				<div className="mt-16 mb-16 md:mt-24 md:mb-24">
					<h1 className="text-4xl md:text-6xl font-bold font-mont">
						{title}
					</h1>
					<p className="max-w-full w-full md:w-1/2 mt-8 leading-loose text-md md:text-xl font-light">
						{description}
					</p>
				</div>
			</div>
			<img
				className="absolute object-cover w-full h-full top-0 left-0 opacity-20"
				src={img}
			/>
		</header>
	);
};

export default SectionHeader;
