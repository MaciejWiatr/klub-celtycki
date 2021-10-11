import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMedia } from "react-use";
import { useEffect, useState } from "react";

const TeatrPage = () => {
	const isSm = useMedia("(min-width: 640px)");
	const isMd = useMedia("(min-width: 768px)");
	const isLg = useMedia("(min-width: 1024px)");
	const [photoAmout, setPhotoAmout] = useState(1);

	useEffect(() => {
		if (isLg) {
			setPhotoAmout(4);
		} else if (isMd) {
			setPhotoAmout(3);
		} else {
			setPhotoAmout(1);
		}
	}, [isSm, isMd, isLg]);

	return (
		<>
			<SectionHeader
				title="Teatr to nasza pasja"
				description="Nasza historia sięga roku 1997, kiedy założyciele naszego stowarzyszenia – głównie studenci krakowskiego Ignatianum, zafascynowani postacią księdza Kolpinga i kulturą celtycką"
				img="/images/teatr-bg.png"
			/>
			<article className="justify-center flex p-8 pt-24 pb-24">
				<div className="max-w-6xl w-full leading-loose">
					<h3 className="font-mont text-xl font-semibold">
						Zaczęło się skromnie. Był rok 2015. Pani Aleksandra
						Abram – emerytowana polonistka – proponuje seniorom z
						Klubu Celtyckiego utworzenie teatru. Sama przygotowuje
						scenariusze kolejnych przedstawień oraz je reżyseruje.
					</h3>
					<p className="mt-16 mb-16">
						Pierwszy wystawiany spektakl to „Matka” wg Jerzego
						Szaniawskiego. Skromna czteroosobowa obsada, pierwsze
						próby… i pytanie: czy się uda? czy będzie
						zainteresowanie? Sztukę przyjęto życzliwie co zachęciło
						nas do kontynuowania tej działalności. Następnym
						spektaklem była „Moralność Pani Dulskiej” wg. Gabrieli
						Zapolskiej. Zespół powiększył się o kolejne osoby – w
						sumie już dziewięć.
					</p>
					<img src="/images/teatr-1.png" className="w-full mb-16" />
					<h3 className="font-mont text-xl font-semibold">
						Dzięki dofinansowaniu z programu ASOS mogliśmy
						zorganizować warsztaty z profesjonalnym aktorem i
						reżyserem Panem Arturem Dziurmanem.
					</h3>
					<div className="mt-16 mb-16 space-y-8">
						<p>
							Dzięki tym warsztatom zdobyliśmy wiedzę, którą
							wykorzystywaliśmy grając w następnych sztukach.
						</p>
						<p>
							Spektakl został bardzo dobrze przyjęty przez
							publiczność, co zachęciło nas do przygotowania i
							wystawienia następnego przedstawienia pt. „Uciekła
							mi przepióreczka” wg. sztuki Stefana Żeromskiego.
							Również przy jej przygotowaniu, korzystaliśmy z
							niezapomnianych konsultacji Pana Artura Dziurmana.
						</p>
						<p>
							Każdy nasz występ był zakończony gratulacjami od
							widzów, co zachęciło nas do kontynuowania naszych
							aktorskich działań.
						</p>
						<p>
							Wystawiliśmy „Wiśniowy sad” wg. Antoniego Czechowa,
							nadal korzystając z profesjonalnych wskazówek Pana
							Artura Dziurmana. Po premierze usłyszeliśmy, że
							niektóre osoby wzruszyły się do łez, gdy tytułowy
							wiśniowy sad przeszedł w ręce dewelopera, sztuka ta
							bowiem, nawiązuje do współczesnej sytuacji.{" "}
						</p>
					</div>
					<img
						src="/images/article-2.png"
						className="rounded-xl md:rounded-3xl mb-16"
					/>
					<h3 className="font-semibold font-mont text-xl">
						Podejmowaliśmy również inne rodzaje działalności
						twórczej. Na stulecie odzyskania przez Polskę
						niepodległości, wystawiliśmy fragmenty „Wesela” wg.
						Stanisława Wyspiańskiego „A to Polska właśnie” –
						położenie nacisku na patriotyzm polskiego narodu,
						sprawiło, że spektakl przyjęty był z wielkim aplauzem.
					</h3>
					<div className="mt-16 mb-16 space-y-8">
						<p>
							Zespół nasz został zaproszony do nawiedzenia
							Sanktuarium Świętego Jakuba Apostoła w Więcławicach
							Starych. Z tej okazji zaprezentowaliśmy widowisko
							pt. „Camino de Santiago” wg. scenariusza członków
							zespołu.
						</p>
						<p>
							Był rok 2020. Realizowaliśmy projekt, w którym
							jednym z zadań do wykonania było napisanie i
							wystawienie nowej sztuki. W pierwszym momencie
							wydawało się to niemożliwe, jak to napisać? i o
							czym? jakie tematy poruszać? Dzisiaj mamy tylu
							profesjonalnych pisarzy i poetów wszystko już
							zostało napisane. O czym więc my mamy pisać?
							Wychodząc z założenia, że skoro teatr jest naszą
							pasją, to musi się udać… i udało się!
						</p>
						<p>
							Wszyscy lubimy jubileusze, a szczególnie w Krakowie.
							Seniorki spotykały się w sztuce pt. „Zjazd
							Jubileuszowy”. Ze względu na pandemię, sztukę
							wystawiliśmy online.
						</p>
						<p>
							Należy również wspomnieć o występach dla dzieci.
							Naszym milusińskim zaprezentowaliśmy „Czerwonego
							Kapturka” i „Kopciuszka” wg. bajek Braci Grimm. Obie
							sztuki cieszyły się wielkim zainteresowaniem, często
							na widowni brakowało miejsce, ponieważ na występy
							dla dzieci, przychodzili również rodzice.{" "}
						</p>
						<p>
							Wszystkie spektakle reżyserowała Pani Aleksandra
							Abram. Konsultacje artystyczne prowadził nieoceniony
							Pan Artur Dziurman.
						</p>
					</div>
					<Swiper
						modules={[Autoplay]}
						slidesPerView={photoAmout}
						spaceBetween={20}
						navigation={false}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
					>
						{Array(7)
							.fill(1)
							.map((x, index) => (
								<SwiperSlide key={index}>
									<img
										className="h-48 w-full object-cover rounded-xl"
										src={`/images/slides/${index + 1}.jpg`}
									/>
								</SwiperSlide>
							))}
					</Swiper>
					<div className="p-8 md:p-16 rounded-xl mt-16 bg-secondary-blue text-white relative overflow-hidden mb-16">
						<div className="z-20 relative">
							<h3 className="text-3xl font-bold">Nasz zespół</h3>
							<p className="mt-4 mb-4">
								W tym czasie na scenie pojawili się
								seniorzy-aktorzy:
							</p>
							<div className="grid space-y-8 md:space-y-0 md:grid-cols-4">
								<div className="pr-6">
									<p>Irena Czekaj</p>
									<p>Elżbieta Hrabia </p>
									<p>Danuta Jabłonowska</p>
									<p>Józef Grzegorz Kopeć</p>
									<p>Maria Król</p>
								</div>
								<div className="pr-6">
									<p>Krystyna Kruk</p>
									<p>Ryszard Kuś </p>
									<p>Krystyna Maciurzyńska</p>
									<p>Halina Mączka</p>
									<p>Danuta Namaczyńska</p>
								</div>
								<div className="pr-6">
									<p>Maria Pawlik</p>
									<p>Anna Pęczek</p>
									<p>Barbara Pyszczek</p>
									<p>Henryk Pyszczek</p>
									<p>Wacław Reczek</p>
								</div>
								<div className="pr-6">
									<p>Wanda Sadzikowska </p>
									<p>Małgorzata Santocka</p>
									<p>Krystyna Turzańska</p>
									<p>Krystyna Zielonka</p>
								</div>
							</div>
						</div>
						<img
							src="/images/zespol.png"
							className="absolute left-0 top-0 w-full h-full object-cover z-10 opacity-20"
						/>
					</div>
					<h3 className="font-mont text-2xl font-semibold">
						Występy
					</h3>
					<div className="grid md:grid-cols-2 gap-10 pt-8">
						<div>
							Premiery odbywały się w siedzibie Stowarzyszenia
							Rodziny Kolpinga przy ul. Żułowskiej 51.
							Występowaliśmy na scenie w Parafii Pana Jezusa
							Dobrego Pasterza, w Osiedlowym Klubie Mieszkańców
							Spółdzielni Mieszkaniowej Biały Prądnik, Krakowskim
							Forum Kultury – Klub Malwa, Ośrodku Kultury Olsza,
							na scenach naszych bratnich Rodzin Kolpinga w
							Luborzycy, Bochni i Bieżanowie, w Sanktuarium. św.
							Jakuba Apostoła w Więcławicach Starych.
						</div>
						<div>
							<p>
								Sztuki dla dzieci wystawialiśmy w przedszkolach,
								podczas Familiady w Krakowie Nowym Bieżanowie, w
								Ośrodku Kultury Olsza, w siedzibie PAL na Olszy.
								Nasze występy zawsze cieszyły się dużym
								zainteresowaniem.
							</p>
							<p>
								W 2020 roku obchodziliśmy skromny jubileusz –
								minęło 5 lat od rozpoczęcia działalności Teatru
								Seniora, któremu nadaliśmy nazwę „ABRA”.
							</p>
						</div>
					</div>
				</div>
			</article>
			<div className="p-16 text-center bg-subtle-blue text-xl font-semibold">
				<p>Dla ciebie teatr również jest pasją?</p>
				<p>Przyjdź do nas</p>
				<p>Zaangażuj się!</p>
			</div>
			<Footer />
		</>
	);
};

export default TeatrPage;
