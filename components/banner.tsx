"use client";
import { Container, Text, Title } from "@mantine/core";
import { motion, useScroll, useTransform } from "framer-motion";
import LeftSlideIn from "@/animations/left-slide-in";

const Banner = ({
	children,

	bgImg,
}: {
	children?: React.ReactNode;
	title?: string;
	subTitle?: string;
	bgImg?: string;
	bgColor?: { light?: string; dark?: string };
}) => {
	const { scrollY } = useScroll();

	// Scale from 1 (top) to 0.85 (scrolling down)
	const scale = useTransform(scrollY, [0, 1000], [1.1, 1.35]);

	return (
		<Container size={"xl"} mih={"100vh"} c={"gray.0"}>
			<motion.div
				style={{
					position: "fixed",
					inset: 0,
					zIndex: -1,
					scale,
					backgroundImage: `url(${bgImg})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
					width: "100vw",
					height: "100vh",
					overflow: "hidden",
				}}
			/>
			<LeftSlideIn duration={0.5}>
				<Title order={1} mt={"26vh"} mb={"xl"} fw={"400"} fz={{ base: "h1", sm: "80px" }}>
					Enable your <br /> Internet of Things
				</Title>
			</LeftSlideIn>
			<LeftSlideIn duration={1}>
				<Text fz={"h1"}>
					Control, Measure, Manage and Locate <br />
					your Things from the Internet
				</Text>
			</LeftSlideIn>
			{children}
		</Container>
	);
};
export default Banner;
