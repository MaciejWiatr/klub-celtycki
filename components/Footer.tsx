import { BsFacebook } from "react-icons/bs";
import { NavLink } from "./NavLink";

const Footer = () => {
	return (
		<footer className="flex justify-center relative overflow-hidden text-white w-full">
			<div className="max-w-6xl w-full p-12 z-20 relative">
				<div className="text-center">
					<p className="font-bold">
						STOWARZYSZENIE RODZINA KOLPINGA "KLUB CELTYCKI"
					</p>{" "}
					<p>31-436 Kraków ul. Żułowska 51</p>
					<p>e-mail: kckrakow@kolping.pl</p>
				</div>
				<a
					target="_blank"
					href="https://www.facebook.com/KolpingKlubCeltycki/"
					className="text-4xl flex justify-center mt-8 mb-8 hover:text-primary-orange cursor-pointer transition"
				>
					<BsFacebook />
				</a>
				<ul className="flex justify-center space-x-5">
					<li>
						<NavLink href="/#onas">O nas</NavLink>
					</li>
					<li>
						<NavLink href="/teatr">Teatr</NavLink>
					</li>
					<li>
						<NavLink href="/dzialania">Działania</NavLink>
					</li>
					<li>
						<NavLink href="/kontakt">Kontakt</NavLink>
					</li>
				</ul>
				<img className="mt-8" src="/images/ue-banner.png" />
			</div>
			<img
				className="absolute w-full h-full object-cover"
				src="/images/footer-banner.png"
			/>
		</footer>
	);
};

export default Footer;
