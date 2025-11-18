"use client";

import { Box, Container, Flex, Grid, GridCol, Stack, Text } from "@mantine/core";
import AddisTechLogo from "./addis-tech-logo";
import Link from "next/link";
import { useHover } from "@mantine/hooks";

const BaseFooter = () => {
	const { hovered, ref } = useHover();
	return (
		<footer id="contact" style={{ backgroundColor: "black" }}>
			<Container size={"xl"} mih={"40vh"} py={"xl"}>
				<Grid c={"gray.6"} gutter={"xl"} mt={"xl"}>
					<GridCol mb={"xl"}>
						<Stack gap={"xs"} align={"center"}>
							<Flex ref={ref} align={"center"} mb={"md"} component={Link} href={"/"}>
								<Box c={hovered ? "ocean-blue.0" : "ocean-blue"} p={0} h={30}>
									<AddisTechLogo size={30} />
								</Box>
								<Text c={hovered ? "ocean-blue.0" : "gray.0"} fz={"h2"} ff={"barlow"} ml={"sm"}>
									ADDIS.TECH
								</Text>
							</Flex>
							<Text fz={"xl"}>Call us:</Text>
							<Text fz={"xl"}>+251-12-22-59-60 (Ethiopia)</Text>
							<Text fz={"xl"}>+1-848-482-4896 (USA)</Text>
						</Stack>
					</GridCol>
					<GridCol mt={"lg"}>
						<Stack align={"center"} h={"100%"}>
							<Text fz={"md"} ff={"barlow"} ta={"center"}>
								&copy; {new Date().getFullYear()} All Rights Reserved <br /> Powered by{" "}
								<Link href={"/"} style={{ color: "#11B7CD" }}>
									ADDIS.TECH
								</Link>
							</Text>
						</Stack>
					</GridCol>
				</Grid>
			</Container>
		</footer>
	);
};

export default BaseFooter;
