import { BsFacebook } from "react-icons/bs";

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
				<div className="text-4xl flex justify-center mt-8 mb-8">
					<BsFacebook />
				</div>
				<ul className="flex justify-center space-x-5">
					<li>O nas</li>
					<li>Teatr</li>
					<li>Działania</li>
					<li>Kontakt</li>
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
