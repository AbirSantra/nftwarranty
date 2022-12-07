/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			Inter: ["Inter", "sans-serif"],
		},
		extend: {
			colors: {
				"primary-dark": "#ff5400",
				primary: "#FB6A00",
				"primary-light": "#ff7900",
				"primary-extralight": "#FBE2D0",
				"white-one": "#ffffff",
				"white-two": "#f8f9fa",
				"grey-one": "#e9ecef",
				"grey-two": "#ced4da",
				"grey-three": "#adb5bd",
				"black-one": "#212529",
				"black-two": "#343a40",
			},
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
