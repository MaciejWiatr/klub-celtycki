module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				mul: "Mulish, sans-serif",
				mont: "Montserrat, sans-serif",
			},
			colors: {
				"primary-blue": "#4FC1DF",
				"primary-orange": "#F58220",
				"secondary-blue": "#243059",
				text: "#3A3A3C",
				"dark-blue": "#141B33",
				"subtle-blue": "#EAEDF6",
				"gradient-gray": "rgba(196, 196, 196,0.3)",
			},
			height: {
				fullpage: "100vh",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
