import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useRouter } from "next/router";
import useNavbar from "../store/useNavbar";
import { useEffect } from "react";

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
		<main className="font-mul">
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
