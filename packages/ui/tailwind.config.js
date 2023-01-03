const defaultTheme = require("tailwindcss/defaultTheme");

const defaultColors = require("tailwindcss/colors");

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ["./src/**/*.{tsx,ts}"],
	theme: {
		extend: {
			colors: {
				primary: defaultColors.indigo
			},
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
