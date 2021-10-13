import AdministrationMemberCard from "../components/AdministrationMemberCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import administrationMembers from "../data/administration";

const KontaktPage = () => {
	return (
		<>
			<div className="flex justify-center">
				<div className="max-w-6xl w-full text-dark p-8">
					<Navbar reversed={true} />
					<div className="mt-16 space-y-8 md:space-y-0 md:space-x-8 grid md:grid-cols-3 text-sm text-gray- mb-16">
						<div>
							<span className="font-semibold">
								STOWARZYSZENIE RODZINA
								<br /> KOLPINGA "KLUB CELTYCKI" 31-436 Kraków
								ul. Żułowska 51
							</span>
							<br /> e-mail: kckrakow@kolping.pl
						</div>
						<div>
							<span className="font-semibold">Numer KRS </span>
							0000462928
							<br /> <span className="font-semibold">
								NIP
							</span>{" "}
							6751041994
							<br /> <span className="font-semibold">
								REGON
							</span>{" "}
							35128757300000
						</div>
						<div>
							Działamy również na terenie Parafii
							<br /> Pana Jezusa Dobrego Pasterza w Krakowie
							<br /> 31-416 Kraków ul. Dobrego Pasterza 4
						</div>
					</div>
					<div className="flex flex-col md:flex-row">
						<ContactForm />
						<div className="md:ml-8 ml-0 mt-8  w-full md:w-2/3">
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
					<div className="mt-16">
						<h2 className="font-mont text-2xl font-bold">
							Zarząd Stowarzyszenia
						</h2>
						<div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 mb-8">
							{administrationMembers.map(
								({ name, title, contact }) => (
									<AdministrationMemberCard
										key={name}
										name={name}
										title={title}
										contact={contact}
									/>
								)
							)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default KontaktPage;
