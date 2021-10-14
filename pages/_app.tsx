import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useRouter } from "next/router";
import useNavbar from "../store/useNavbar";
import { useEffect } from "react";
import Head from "next/head";
import MetaTags from "../components/MetaTags";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const { setShowNavbar } = useNavbar();

	useEffect(() => {
		router.events.on("routeChangeComplete", handleRouteChange);
	}, []);

	const handleRouteChange = () => {
		setShowNavbar(false);
	};

	return (
		<>
			<Head>
				<title>Rodzina Kolpinga - Klub Celtycki w Krakowie</title>
				<link
					rel="shortcut icon"
					href="/favicon.png"
					type="image/x-icon"
				/>
				<MetaTags />
			</Head>
			<main className="font-mul">
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
