const AboutSection = () => {
	return (
		<section className="flex justify-center mb-10 overflow-hidden">
			<div className="max-w-6xl w-full p-8">
				<div className="font-mont mt-5">
					<h3 className="text-xl md:text-2xl font-semibold text-primary-blue">
						Kilka słów o nas
					</h3>
					<h2 className="text-3xl md:text-5xl font-bold text-secondary-blue">
						Kim jesteśmy?
					</h2>
				</div>
				<div className="flex justify-end relative">
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
						className="absolute z-10 left-0 top-0 lg:w-3/5 opacity-10 lg:opacity-20 select-none"
						src="/images/kolping-about.png"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
