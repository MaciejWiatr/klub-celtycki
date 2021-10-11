import KolpingLogo from "./KolpingLogo";
import clsx from "clsx";
import { useState } from "react";

export const Navbar = () => {
	const [showNavigation, setShowNavigation] = useState(true);

	return (
		<>
			<nav className="h-16 flex justify-between items-center text-white z-40 relative">
				<div>
					<KolpingLogo />
				</div>
				<ul className="hidden md:flex space-x-6 font-medium">
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
				<div
					className="md:hidden bg-white p-3 pr-5 pl-5 rounded-md text-secondary-blue cursor-pointer select-none"
					onClick={() => {
						setShowNavigation((s) => !s);
					}}
				>
					Menu
				</div>
			</nav>
			<div
				className={clsx(
					"md:hidden absolute w-full h-screen left-0 top-0 bg-secondary-blue z-30",
					{
						hidden: showNavigation,
					}
				)}
			>
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
		</>
	);
};
