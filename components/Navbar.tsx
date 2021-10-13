import KolpingLogo from "./KolpingLogo";
import useNavbar from "../store/useNavbar";
import { NavLink } from "./NavLink";
import { FC } from "react";
import clsx from "clsx";

interface IProps {
	reversed?: boolean;
}

export const Navbar: FC<IProps> = ({ reversed = false }) => {
	const { showNavbar, toggleNavbar } = useNavbar();

	return (
		<>
			<nav className="h-16 flex justify-between items-center text-white z-50 relative">
				<a href="/">
					<KolpingLogo reversed={reversed && !showNavbar} />
				</a>
				<ul
					className={clsx("hidden md:flex space-x-6 font-medium", {
						"text-black": reversed,
					})}
				>
					<li>
						<NavLink href="/#onas">O nas</NavLink>
					</li>
					<li>
						<NavLink href="/teatr">Teatr</NavLink>
					</li>
					<li>
						<NavLink href="/dzialania">Nasze działania</NavLink>
					</li>
					<li className="hover:text-primary-orange">
						<a
							href="/kontakt"
							className={clsx("p-3 pr-5 pl-5 rounded-md", {
								"bg-secondary-blue text-white": reversed,
								"bg-white p-3 pr-5 pl-5 rounded-md text-secondary-blue":
									!reversed,
							})}
						>
							Kontakt
						</a>
					</li>
				</ul>
				<div
					className={clsx(
						"md:hidden  p-3 pr-5 pl-5 rounded-md  cursor-pointer select-none",
						{
							"bg-white text-secondary-blue":
								!reversed || showNavbar,
							"bg-secondary-blue text-white":
								reversed && !showNavbar,
						}
					)}
					onClick={toggleNavbar}
				>
					{showNavbar ? "Zamknij menu" : "Menu"}
				</div>
			</nav>
			{showNavbar && (
				<div className="z-40 md:hidden fixed w-full h-screen left-0 top-0 bg-secondary-blue text-white">
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
