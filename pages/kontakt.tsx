import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

const KontaktPage = () => {
	return (
		<>
			<div className="flex justify-center">
				<div className="max-w-6xl w-full text-black p-8">
					<Navbar reversed={true} />
					<div className="mt-16 space-y-8 md:space-y-0 md:space-x-8 grid md:grid-cols-3 text-sm text-gray- mb-16">
						<div>
							STOWARZYSZENIE RODZINA
							<br /> KOLPINGA "KLUB CELTYCKI" 31-436 Kraków ul.
							Żułowska 51
							<br /> e-mail: kckrakow@kolping.pl
						</div>
						<div>
							Numer KRS 0000462928
							<br /> NIP 6751041994
							<br /> REGON 35128757300000
						</div>
						<div>
							Działamy również na terenie Parafii
							<br /> Pana Jezusa Dobrego Pasterza w Krakowie
							<br /> 31-416 Kraków ul. Dobrego Pasterza 4
						</div>
					</div>
					<div className="flex">
						<ContactForm />
						<div className="ml-8 w-2/3">
							<iframe
								className="w-full h-full rounded-lg"
								id="gmap_canvas"
								src="https://maps.google.com/maps?q=%C5%BBu%C5%82owska%2051,%20Krak%C3%B3w&t=&z=13&ie=UTF8&iwloc=&output=embed"
								frameBorder="0"
								scrolling="no"
								marginHeight={0}
								marginWidth={0}
							></iframe>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default KontaktPage;
