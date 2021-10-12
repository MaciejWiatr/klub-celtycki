import ActivityCard from "../components/ActivityCard";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import useNavbar from "../store/useNavbar";
import Link from "next/link";

const activities = [
	{
		title: "Wędrówki szlakami jakubowymi, spacery krajoznawcze, nordic walking",
		description:
			"Stawiamy na zdrową aktywność fizyczną organizując piesze wyprawy i spacery historyczno-podróżnicze w okolicach Krakowa.",
		img: "/images/activities/1.jpg",
	},
	{
		title: "Zajęcia fizyczne: rytmika dla seniorów, gimnastyka",
		description:
			"W myśl zasady „w zdrowym ciele, zdrowy duch” dbamy o sprawność i zdrowie fizyczne – ćwiczenia gimnastyczne i sportowe pomagają nam zachować sprawność i zdrowie.",
		img: "/images/activities/2.jpg",
	},
	{
		title: "Warsztaty kulinarne, wykłady na temat zdrowego żywienia",
		description:
			"Racjonalne żywienie to podstawa zdrowia – jak zdrowo żywić siebie i bliskich pomagają ustalić nam specjaliści: korzystamy z porad dietetyków i lekarzy. Jak przygotować smaczne i zdrowe potrawy – w tym również z „kuchni świata”, uczymy się w trakcie warsztatów kulinarnych.",
		img: "/images/activities/3.jpg",
	},
	{
		title: "Zajęcia w obszarze kultury i sztuki",
		description:
			"„Nie samym chlebem człowiek żyje” – my potrzebujemy jeszcze doznań artystycznych, dlatego organizujemy wyjścia do teatrów, muzeów, galerii, wystaw i kina. Spotkania podróżnicze, literackie, poetyckie to odskocznia od szarej codzienności, okazja spotkania ciekawych ludzi i przeżycia wzruszeń.",
		img: "/images/activities/4.jpg",
	},
	{
		title: "Warsztaty językowe, komputerowe i rękodzielnicze",
		description:
			"Na naukę nigdy nie jest za późno – tyle nowych, ciekawych zjawisk wokół, jeszcze tyle nowych rzeczy do poznania, nauczenia się: chcemy lepiej porozumiewać się, móc korzystać z dobrodziejstw internetu, wykonywać piękne wytwory rękodzielnicze.",
		img: "/images/activities/5.jpg",
	},
	{
		title: "Integracja",
		description:
			"Bierzemy udział w Kolpingowskiej Senioriadzie,  spotkaniach w organizacjach prosenioralnych, wizytach studyjnych u zaprzyjaźnionych Rodzin Kolpinga.",
		img: "/images/activities/6.jpg",
	},
	{
		title: "Kampanie społeczne i fundraisingowe",
		description:
			"Aktywnie włączamy się w akcje pomocy potrzebującym. Od lat uczestniczymy w akcji „Niedzielny obiad” zapraszając samotnych seniorów do stołu nie tylko na posiłek, ale przede wszystkim na spędzenie przy stole czasu z osobami życzliwymi. Wsparliśmy kampanie fundraisngowe: „Wiaderko prądu” – akcja zbierania funduszy na zakup paneli słonecznych dla mieszkańców Ugandy oraz „Razem dla Hondurasu” – zapewnienie środków na zakup podstawowych produktów spożywczych dla dotkniętych pandemią mieszkańców Hondurasu.",
		img: "/images/activities/7.jpg",
	},
];

const DzialaniaPage = () => {
	const { showNavbar } = useNavbar();

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
					title={title}
					description={description}
					img={img}
				/>
			))}
			<div className="p-8 text-center bg-primary-orange text-md font-semibold text-white">
				<p>
					Jeżeli chcesz pomóc w naszych działaniach{" "}
					<Link href="/kontakt">
						<p className="text-dark-blue font-bold cursor-pointer">
							skontaktuj się z nami!
						</p>
					</Link>
				</p>
			</div>
			<Footer />
		</>
	);
};

export default DzialaniaPage;
