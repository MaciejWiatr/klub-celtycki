import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
	return (
		<main className="font-mul">
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
