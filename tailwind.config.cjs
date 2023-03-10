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
				'starry-sky': "url('https://images.unsplash.com/photo-1622793139910-e261be0b30a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG5pZ2h0JTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60')",
				'down-arrow': "url('https://github.com/Stevenalp18/web-dev-images/blob/main/down-arrow.png?raw=true')"
			}
		},
	},
	plugins: [],
}
