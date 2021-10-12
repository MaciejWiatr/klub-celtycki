import KolpingLogo from "./KolpingLogo";
import useNavbar from "../store/useNavbar";
import { NavLink } from "./NavLink";

export const Navbar = () => {
	const { showNavbar, toggleNavbar } = useNavbar();

	return (
		<>
			<nav className="h-16 flex justify-between items-center text-white z-50 relative">
				<a href="/">
					<KolpingLogo />
				</a>
				<ul className="hidden md:flex space-x-6 font-medium">
					<li>
						<NavLink href="/#onas">O nas</NavLink>
					</li>
					<li>
						<NavLink href="/teatr">Teatr</NavLink>
					</li>
					<li>
						<NavLink href="/dzialania">Działania</NavLink>
					</li>
					<li className="hover:text-primary-orange">
						<a
							href="/kontakt"
							className="bg-white p-3 pr-5 pl-5 rounded-md text-secondary-blue"
						>
							Kontakt
						</a>
					</li>
				</ul>
				<div
					className="md:hidden bg-white p-3 pr-5 pl-5 rounded-md text-secondary-blue cursor-pointer select-none"
					onClick={toggleNavbar}
				>
					{showNavbar ? "Zamknij menu" : "Menu"}
				</div>
			</nav>
			{showNavbar && (
				<div className="z-40 md:hidden fixed w-full h-screen left-0 top-0 bg-secondary-blue">
					<ul className="w-full h-full flex justify-center items-center flex-col space-y-12">
						<li>
							<NavLink href="/#onas">O nas</NavLink>
						</li>
						<li>
							<NavLink href="/teatr">Teatr</NavLink>
						</li>
						<li>
							<NavLink href="/dzialania">Działania</NavLink>
						</li>
						<li className="hover:text-primary-orange">
							<a
								href="/kontakt"
								className="bg-white p-3 pr-5 pl-5 rounded-md text-secondary-blue"
							>
								Kontakt
							</a>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
