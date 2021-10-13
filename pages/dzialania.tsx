import ActivityCard from "../components/ActivityCard";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import Link from "next/link";
import activities from "../data/activities";

const DzialaniaPage = () => {
	return (
		<>
			<SectionHeader
				title="Nasze działania"
				description="Stowarzyszenie zrzesza kilkunastu członków, głównie osoby starsze w wieku 60+. Przy stowarzyszeniu działa Kolpingowski Klub Seniora nastawiony na rozwój usług społecznych na rzecz osób starszych oraz wspieranie działań samopomocy i samoorganizacji seniorów. Aktywność stowarzyszenia opiera się w głównej mierze na wolontaryjnej pracy członkiń i członków i jest dedykowana głównie mieszkańcom krakowskiej dzielnicy Prądnik Czerwony."
				img="/images/dzialania-bg.png"
			/>
			<div className="p-8 text-center bg-primary-orange text-md font-semibold text-white">
				<p>
					Stowarzyszenie Rodzina Kolpinga Klub Celtycki prowadzi
					różnorodne działania, pozyskując również na nie środki:
				</p>
			</div>
			{activities.map(({ title, description, img }) => (
				<ActivityCard
					key={title}
					title={title}
					description={description}
					img={img}
				/>
			))}
			<div className="p-8 text-center bg-primary-orange text-md font-semibold text-white">
				<p>
					Jeżeli chcesz pomóc w naszych działaniach
					<br />
					<Link href="/kontakt">
						<a className="text-dark-blue font-bold cursor-pointer">
							skontaktuj się z nami!
						</a>
					</Link>
				</p>
			</div>
			<Footer />
		</>
	);
};

export default DzialaniaPage;
