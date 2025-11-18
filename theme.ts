import { createTheme } from "@mantine/core";

export const theme = createTheme({
	autoContrast: true,
	luminanceThreshold: 0.35,
	defaultGradient: {
		from: "#7114EF",
		to: "#1475F7",
		deg: 90,
	},
	primaryColor: "gray",
	defaultRadius: 0,
	colors: {
		"ocean-blue": [
			"#7AD1DD",
			"#5FCCDB",
			"#44CADC",
			"#2AC9DE",
			"#1AC2D9",
			"#11B7CD",
			"#09ADC3",
			"#0E99AC",
			"#128797",
			"#147885",
		],
	},
	fontFamily: "var(--font-open-sans)",
	headings: {
		fontFamily: "var(--font-poppins)",
	},
});
