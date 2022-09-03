/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/colors/themes")["[data-theme=light]"],
					primary: "#f43f5e",
					secondary: "#d6d3d1",
					accent: "#1d4ed8",
				},
				dark: {
					...require("daisyui/src/colors/themes")["[data-theme=dark]"],
					primary: "#f43f5e",
					secondary: "#d6d3d1",
					accent: "#1d4ed8",
					"primary-focus": "mediumblue",
				},
			},
		],
	},
}
