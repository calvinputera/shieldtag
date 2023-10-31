/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
			nunito: ["Nunito Sans", "sans-serif"],
		},
		colors: {
			primaryBlue: "#3450a2",
			blueHover: "#d9e0fa",
			secondaryBlue: "#5376e7",
			primaryYellow: "#FBBC05",
			primaryWhite: "#FFFFFF",
			primaryBlack: "#060606",
			secondaryBlack: "#333333",
			primaryGray: "#4B4B4B",
		},
		extend: {},
	},
	plugins: [],
};
