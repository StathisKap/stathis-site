/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			animation: {
				blink: 'blink 1s infinite'
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0 },
				}
			}
		}
	},
	plugins: []
};
