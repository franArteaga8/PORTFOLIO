/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				carbon: "#0F0F0F",
				ash: "#F0F0F0"

			},
			fontFamily: {
				'jetbrains': ['"JetBrains Mono"', 'monospace'],
				'bebas': ['Bebas Neue', 'sans-serif'],
			  },
		  	fontWeight: {
				'100': '100',
				'200': '200',
				'300': '300',
				'400': '400',
				'500': '500',
				'600': '600',
				'700': '700',
				'800': '800',
			  },
		},
	},
	plugins: [],
}
