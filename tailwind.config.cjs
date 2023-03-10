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
				'mountain': "url('https://github.com/Stevenalp18/web-dev-images/blob/main/mountain-background.jpeg?raw=true')",
				'starry-sky': "url('https://github.com/Stevenalp18/web-dev-images/blob/main/starry-night.jpeg?raw=true')"
			}
		},
	},
	plugins: [],
}
