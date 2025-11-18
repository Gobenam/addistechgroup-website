"use client";
import { BackgroundImage, Container, useComputedColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";

const Section = ({
	children,
	bgColor = { light: "background", dark: "background" },
	bgImg,
}: {
	children: React.ReactNode;
	bgImg?: string;
	bgColor?: { light?: string; dark?: string };
}) => {
	const computedColorScheme = useComputedColorScheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true); // ensure hydration is done
	}, []);

	if (!mounted) {
		return null; // return a skeleton loader or nprogress bar can be used
	}

	return (
		<Container
			fluid
			bg={computedColorScheme === "light" ? bgColor.light : bgColor.dark}
			px={0}
			pos={"relative"}
		>
			<BackgroundImage
				src={bgImg ?? ""}
				pt={"108"}
				mih={"100vh"}
				style={{
					width: "100%",
					height: "100%",
					backgroundAttachment: "fixed",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				{children}
			</BackgroundImage>
		</Container>
	);
};
export default Section;
