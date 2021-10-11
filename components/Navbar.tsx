import KolpingLogo from "./KolpingLogo";
import useNavbar from "../store/useNavbar";
import Link from "next/link";

export const Navbar = () => {
	const { showNavbar, toggleNavbar } = useNavbar();

	return (
		<>
			<nav className="h-16 flex justify-between items-center text-white z-40 relative">
				<a href="/">
					<KolpingLogo />
				</a>
				<ul className="hidden md:flex space-x-6 font-medium">
					<li>
						<Link href="/#onas">O nas</Link>
					</li>
					<li>
						<Link href="/teatr">Teatr</Link>
					</li>
					<li>
						<Link href="/dzialania">Działania</Link>
					</li>
					<li>
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
					Menu
				</div>
			</nav>
			{showNavbar && (
				<div className="md:hidden absolute w-full h-screen left-0 top-0 bg-secondary-blue z-30">
					<ul className="w-full h-full flex justify-center items-center flex-col space-y-12">
						<li>O nas</li>
						<li>Teatr</li>
						<li>Działania</li>
						<li>
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
