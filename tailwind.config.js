/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Inter", "sans-serif"],
			mono: ["JetBrains Mono", "monospace"],
		},
		extend: {},
	},
	plugins: [],
};
