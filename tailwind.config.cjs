/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				shantell: ['Shantell sans'],
				alegreya: ['Alegreya Sans'],
				sono: ['Sono']
			},
			backgroundImage: {
				'mountain': "url('/public/assets/mountain-background.jpeg')",
				'night-sky': "url('/public/assets/night-sky.jpeg')"
			}
		},
	},
	plugins: [],
}
