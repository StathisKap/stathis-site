/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,css,ts}'],
	theme: {
		extend: {
			animation: {
				blink: 'blink 1s infinite',
				pan: 'pan 3s linear infinite',
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0 },
				},
				pan: {
					'from': { 'background-position': '0% center' },
					'to': { 'background-position': '-200% center' },
				},
			},
			fontFamily: {
				Menlo: "Menlo",
				Poppins: "Poppins"
			},
		}
	},
	plugins: []
};