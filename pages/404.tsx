import KolpingLogo from "../components/KolpingLogo";
import { NavLink } from "../components/NavLink";

const NotFoundPage = () => {
	return (
		<div className="w-screen h-screen bg-secondary-blue flex justify-center items-center text-white relative">
			<div className="flex flex-col justify-center items-center z-10">
				<KolpingLogo />
				<h1 className="mt-5 text-xl md:text-2xl font-mont font-bold ">
					Nie znaleziono strony
				</h1>
				<nav className="flex flex-col md:flex-row text-md text-center space-y-4 md:space-y-0 md:space-x-8 mt-5 bg-white text-secondary-blue p-4 pl-5 pr-5 md:p-4 md:pl-6 md:pr-6 font-semibold rounded-xl md:rounded-full">
					<NavLink href="/">Strona główna</NavLink>
					<NavLink href="/teatr">Teatr</NavLink>
					<NavLink href="/dzialania">Nasze działania</NavLink>
					<NavLink href="/kontakt">Kontakt</NavLink>
				</nav>
			</div>
			<img
				className="absolute w-full h-full object-cover z-0 opacity-20 top-0"
				src="/images/404bg.JPG"
			/>
		</div>
	);
};

export default NotFoundPage;
