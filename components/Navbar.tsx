import KolpingLogo from "./KolpingLogo";

export const Navbar = () => {
	return (
		<nav className="h-16 flex justify-between items-center text-white z-20 relative">
			<div>
				<KolpingLogo />
			</div>
			<div>
				<ul className="flex space-x-6 font-medium">
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
		</nav>
	);
};
