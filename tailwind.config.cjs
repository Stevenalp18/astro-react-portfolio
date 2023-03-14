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
				'mountain': "url('https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80')",
				'starry-sky': "url('https://images.unsplash.com/photo-1622793139910-e261be0b30a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG5pZ2h0JTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=&q=60')",
				'dark-night': "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
			}
		},
	},
	plugins: [],
}
