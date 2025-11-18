"use client";

import { AppShell, Box, Burger, Button, Container, Flex, Text } from "@mantine/core";
import { useDisclosure, useHeadroom, useHover } from "@mantine/hooks";
import AddisTechLogo from "./addis-tech-logo";
import Link from "next/link";
import BaseFooter from "./base-footer";
import DesktopNavItems, { MobileNavItems } from "./nav-items";
import { scrollToBottom } from "@/animations/scroll-to-bottom";

const BaseHeader = ({ children }: { children: React.ReactNode }) => {
	const pinned = useHeadroom({ fixedAt: 100 });
	const [opened, { toggle }] = useDisclosure();
	const { hovered, ref } = useHover();

	return (
		<AppShell
			header={{ height: 100, collapsed: !pinned, offset: opened }}
			navbar={{ width: 300, breakpoint: "md", collapsed: { desktop: true, mobile: !opened } }}
			withBorder={false}
			transitionDuration={500}
			transitionTimingFunction="ease-in-out"
		>
			<AppShell.Header
				bg={"transparent"}
				style={{
					backdropFilter: "blur(10px)",
					// boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
				}}
			>
				<Container size={"xl"} h={"100%"}>
					<Flex align={"center"} justify={"space-between"} h={"100%"}>
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="md"
							mr={{ base: "md", md: "xl" }}
							aria-label={opened ? "Close navigation menu" : "Open navigation menu"}
						/>
						<Flex align={"center"} component={Link} href={"/"}>
							<Box c={"gray.0"} p={0} h={30}>
								<AddisTechLogo size={30} />
							</Box>
							<Text c={"gray.0"} fz={{ base: "xl", md: "h2" }} ff={"barlow"} ml={"sm"}>
								ADDIS.TECH
							</Text>
						</Flex>
						<Flex align={"center"} gap={"xl"}>
							<Flex align={"center"} gap={"lg"} visibleFrom="md">
								<DesktopNavItems />
							</Flex>

							<Button
								ref={ref}
								variant={hovered ? "filled" : "outline"}
								color={hovered ? "ocean-blue" : "gray"}
								ml={{ base: "xs", md: "xl" }}
								size={"md"}
								radius={"md"}
								fz={"sm"}
								fw={"400"}
								onClick={scrollToBottom}
							>
								Contact Us
							</Button>
						</Flex>
					</Flex>
				</Container>
			</AppShell.Header>

			<AppShell.Navbar
				p="md"
				style={{
					backdropFilter: "blur(15px)",
					backgroundColor: "rgba(0, 0, 0, 0.6)",
				}}
			>
				<MobileNavItems toggle={toggle} />
			</AppShell.Navbar>

			<AppShell.Main>{children}</AppShell.Main>
			<BaseFooter />
		</AppShell>
	);
};

export default BaseHeader;
