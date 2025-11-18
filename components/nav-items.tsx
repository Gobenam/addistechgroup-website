import { NAV_LINKS } from "@/data/nav-link";
import { Accordion, Anchor, Button, Menu, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TbChevronDown } from "react-icons/tb";

const DesktopNavItems = () => {
	const [active, setActive] = useState("");

	const pathname = usePathname();
	const path = pathname.replace("/", "") || "home";

	useEffect(() => {
		setActive(path);
	}, [path]);

	return NAV_LINKS.map((link) => {
		const menuItems = link.links?.map((item) => (
			<Menu.Item key={item.href} component={Link} href={`/${item.href}`}>
				<Text ta={"right"} c={active === item.href ? "ocean-blue" : "gray.0"} fz={"sm"} fw={"400"}>
					{item.label}
				</Text>
			</Menu.Item>
		));

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					trigger="click-hover"
					position="bottom"
					openDelay={100}
					closeDelay={100}
					closeOnItemClick
				>
					<Menu.Target>
						<Button
							c={"gray.0"}
							fz={"sm"}
							fw={"400"}
							variant={"transparent"}
							px={0}
							style={{
								cursor: "default",
							}}
							rightSection={<TbChevronDown color="gray" size={16} />}
						>
							{link.label}
						</Button>
					</Menu.Target>
					<Menu.Dropdown bg={"dark.9"} style={{ border: 0 }}>
						{menuItems}
					</Menu.Dropdown>
				</Menu>
			);
		}

		return (
			<Anchor
				key={link.href}
				c={active === link.href ? "ocean-blue" : "gray.0"}
				fz={"sm"}
				fw={"400"}
				component={Link}
				href={`/${link.href}`}
			>
				{link.label}
			</Anchor>
		);
	});
};

export const MobileNavItems = ({ toggle }: { toggle: () => void }) => {
	const [active, setActive] = useState("");
	const [value, setValue] = useState<string | null>(null);

	const pathname = usePathname();
	const path = pathname.replace("/", "") || "home";

	useEffect(() => {
		setActive(path);
	}, [path]);

	return (
		<Accordion value={value} onChange={setValue}>
			{NAV_LINKS.map((link) => {
				const menuItems = link.links?.map((item) => (
					<Accordion.Panel key={item.href}>
						<Text
							c={active === item.href ? "ocean-blue" : "gray.0"}
							fz={"sm"}
							fw={"400"}
							component={Link}
							href={`/${item.href}`}
							onClick={() => {
								setValue(null);
								toggle();
							}}
						>
							{item.label}
						</Text>
					</Accordion.Panel>
				));

				if (menuItems) {
					return (
						<Accordion.Item key={link.href} value={link.href}>
							<Accordion.Control fz={"sm"} fw={"400"}>
								{link.label}
							</Accordion.Control>
							{menuItems}
						</Accordion.Item>
					);
				}

				return (
					<Anchor
						key={link.href}
						component={Link}
						href={`/${link.href}`}
						onClick={() => {
							setValue(null);
							toggle();
						}}
					>
						<Text
							ml={"md"}
							mt={"md"}
							c={active === link.href ? "ocean-blue" : "gray.0"}
							fz={"sm"}
							fw={"400"}
						>
							{link.label}
						</Text>
					</Anchor>
				);
			})}
		</Accordion>
	);
};

export default DesktopNavItems;
