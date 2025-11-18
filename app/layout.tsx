import "@mantine/core/styles.css";
import "./globals.css";

import { Poppins, Barlow, Open_Sans } from "next/font/google";

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import { theme } from "@/theme";
import BaseHeader from "@/components/base-header";
import DynamicFavicon from "@/components/dynamic-favicon";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["200", "300", "400"], // choose what you need
	variable: "--font-poppins", // optional: for CSS variable
});
const barlow = Barlow({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500"], // choose what you need
	variable: "--font-barlow", // optional: for CSS variable
});

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "500", "700"],
	variable: "--font-open-sans",
});

export const metadata = {
	title: "Home | Addis.Tech",
	description: "Move-in to the Future",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			{...mantineHtmlProps}
			className={`${poppins.variable} ${barlow.variable} ${openSans.variable}`}
		>
			<head>
				<ColorSchemeScript defaultColorScheme="dark" forceColorScheme="dark" />
			</head>
			<body>
				<MantineProvider theme={theme} defaultColorScheme="dark" forceColorScheme="dark">
					<DynamicFavicon />
					<BaseHeader>{children}</BaseHeader>
				</MantineProvider>
			</body>
		</html>
	);
}
