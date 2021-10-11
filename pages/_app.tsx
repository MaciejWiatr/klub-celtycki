import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function MyApp({ Component, pageProps }) {
	return (
		<main className="font-mul">
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
