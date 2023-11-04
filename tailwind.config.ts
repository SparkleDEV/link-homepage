import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			// fontFamily: {
			// 	main: ['Quicksand']
			// }
			colors: {
				theme: {
					bg: '#3b3b3b',
					card: '#4f4f4f',
					input: '#1c1c1c',
					border: '#6c6c6c',
					imgborder: '#ec11d6'
				}
			},
			boxShadow: {
				link: '#00000040 3px 2px 1px',
				card: '#00000040 3px 3px 2px'
			}
		}
	},
	plugins: []
}
export default config
