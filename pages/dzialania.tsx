import SectionHeader from "../components/SectionHeader";

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
		</>
	);
};

export default DzialaniaPage;
