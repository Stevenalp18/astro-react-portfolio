/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				shantell: ['Shantell sans'],
				alegreya: ['Alegreya Sans']
			},
			backgroundImage: {
				'mountain': "url('/public/mountain-background.jpeg')"
			}
		},
	},
	plugins: [],
}
