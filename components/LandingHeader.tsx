import { Navbar } from "./Navbar";

const LandingHeader = () => {
	return (
		<header className="w-full bg-secondary-blue relative p-8 text-white flex justify-center">
			<div className="max-w-6xl w-full">
				<Navbar></Navbar>
				<div className="w-full relative font-mont z-10 mt-36 text-center md:text-left">
					<h2 className="text-primary-blue font-semibold text-2xl md:text-3xl sm:mb-2">
						To my
					</h2>
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-normal -space-y-3 sm:space-y-6">
						<p>Rodzina Kolpinga</p>
						<p>Klub Celtycki</p>
						<p>w Krakowie</p>
					</h1>
				</div>
				<div className="flex flex-col sm:flex-row sm:space-x-4 mt-8 mb-36 w-full justify-center md:justify-start relative z-10 space-y-4 sm:space-y-0">
					<a className="p-4 pr-6 pl-6 font-bold bg-primary-blue rounded-lg cursor-pointer text-center sm:text-left">
						Dowiedz się więcej o nas
					</a>
					<a className="p-4 pr-6 pl-6 font-bold bg-none border-2 border-white rounded-lg hover:bg-white hover:text-bg-secondary-blue cursor-pointer transition text-center sm:text-left">
						Skontaktuj się z nami
					</a>
				</div>
			</div>
			<img
				src="/images/header-bg.png"
				className="absolute top-0 left-0 object-cover w-full h-full grayscale opacity-20 z-0"
			></img>
		</header>
	);
};

export default LandingHeader;
