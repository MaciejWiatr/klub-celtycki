import { NavLink } from "./NavLink";

const AboutSection = () => {
	return (
		<section className="flex flex-col items-center overflow-hidden">
			<div className="max-w-6xl w-full p-8">
				<div className="font-mont mt-5">
					<h3
						id="onas"
						className="text-xl md:text-2xl font-semibold text-primary-blue"
					>
						Kilka słów o nas
					</h3>
					<h2 className="text-3xl md:text-5xl font-bold text-secondary-blue">
						Kim jesteśmy?
					</h2>
				</div>
				<div className="flex justify-end relative mb-8">
					<article className="lg:w-1/2 space-y-10 relative z-20 mt-5">
						<p>
							Nasza historia sięga roku 1997, kiedy założyciele
							naszego stowarzyszenia – głównie studenci
							krakowskiego Ignatianum, zafascynowani postacią
							księdza Kolpinga i kulturą celtycką – postanowili
							powołać do życia organizację, która odpowiadałaby na
							palące potrzeby społeczne, zgodnie z ideą Adolpha
							Kolpinga: Czasy pokażą Wam, co należy czynić. Wtedy,
							czynili dobro, ucząc bezpłatnie języka angielskiego.
						</p>
						<p>
							Stowarzyszenie przez lata zmieniało się. Obecnie, po
							odnowionej rejestracji w roku 2013 i powołaniu
							nowego zarządu, stowarzyszenie skupia głównie
							seniorów, którzy nadal chcą się rozwijać: zwiększać
							wiedzę, poszerzać zainteresowania oraz pomagać
							osobom w potrzebie.
						</p>
						<p>
							Naszą pasją jest teatr: tworzymy go sami po
							amatorsku, ale profesjonalnie, również dzięki
							wolontaryjnemu wsparciu sympatyków.
						</p>
						<p>
							Stow. Rodzina Kolpinga Klub Celtycki w Krakowie ma
							swoją siedzibę przy ul. Żułowskiej 51, ale działamy
							również na terenie parafii pw. Pana Jezusa Dobrego
							Pasterza oraz terenie krakowskiej dzielnicy Prądnik
							Czerwony.
						</p>
						<p className="font-bold">Zapraszamy do nas!</p>
					</article>
					<img
						className="h-full object-contain absolute z-10 left-0 top-0 lg:w-3/5 opacity-10 lg:opacity-20 select-none"
						src="/images/kolping-about.png"
					/>
				</div>
			</div>
			<div className="p-12 w-full text-center bg-subtle-blue text-xl font-bold">
				<p>Czytaj dalej:</p>
				<div className="flex justify-center space-x-4 mt-2 font-normal text-sm">
					<NavLink href="/teatr">
						<div className="p-2 bg-white rounded shadow">Teatr</div>
					</NavLink>
					<NavLink href="/dzialania">
						<div className="p-2 bg-white rounded shadow">
							Nasze działania
						</div>
					</NavLink>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
