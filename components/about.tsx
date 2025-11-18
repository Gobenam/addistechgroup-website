import {
	ActionIcon,
	Box,
	Button,
	Container,
	Flex,
	Grid,
	GridCol,
	Text,
	Textarea,
	TextInput,
	Title,
} from "@mantine/core";
import Section from "./section";
import ReactMarkdown from "react-markdown";
import {
	FaAt,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaRegUser,
	FaXTwitter,
} from "react-icons/fa6";
import remarkGfm from "remark-gfm";

const About = ({ title, description }: { title: string; description: string }) => {
	return (
		<Section>
			<Container size={"md"} py={"xl"} mx={{ base: "md", md: "auto" }}>
				<Title c={"gray.0"} fw={"400"} fz={{ base: "h1", md: 40 }}>
					{title}
				</Title>
				<Box c={"gray.5"} py={"xl"}>
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						components={{
							p: ({ ...props }) => <Text style={{ marginBottom: "1rem" }} {...props} />,
						}}
					>
						{description}
					</ReactMarkdown>
				</Box>
				<Title order={2} c={"gray.0"} fw={"400"} fz={{ base: "h1", md: 40 }} mt={"xl"} pt={"xl"}>
					Let&apos;s Work Together
				</Title>
				<Text c={"gray.5"} my={"md"}>
					Get in touch so we can start working together.
				</Text>
				<Flex align={"center"}>
					<ActionIcon variant="subtle" color={"ocean-blue"} size="lg" aria-label="Settings">
						<FaLinkedinIn />
					</ActionIcon>
					<ActionIcon variant="subtle" color={"ocean-blue"} size="lg" aria-label="Settings">
						<FaXTwitter />
					</ActionIcon>
					<ActionIcon variant="subtle" color={"ocean-blue"} size="lg" aria-label="Settings">
						<FaFacebookF />
					</ActionIcon>
					<ActionIcon variant="subtle" color={"ocean-blue"} size="lg" aria-label="Settings">
						<FaInstagram />
					</ActionIcon>
				</Flex>
				<Grid mt={"xl"} gutter={"xl"}>
					<GridCol span={{ base: 12, md: 6 }}>
						<TextInput
							label="First Name"
							placeholder="Your First Name"
							c={"ocean-blue"}
							mb={"md"}
							leftSection={<FaRegUser size={16} />}
						/>
						<TextInput
							label="Last Name"
							placeholder="Your Last Name"
							c={"ocean-blue"}
							mb={"md"}
							leftSection={<FaRegUser size={16} />}
						/>
						<TextInput
							label="Email"
							placeholder="Your email"
							c={"ocean-blue"}
							mb={"md"}
							required
							leftSection={<FaAt size={16} />}
						/>
					</GridCol>
					<GridCol span={{ base: 12, md: 6 }} mb={{ base: "md", md: "xl" }}>
						<Textarea
							placeholder="Your Message"
							label="Message"
							c={"ocean-blue"}
							mb={"md"}
							required
							autosize
							minRows={5}
						/>
						<Button
							size={"lg"}
							mb={{ base: "md", md: "xl" }}
							color={"ocean-blue"}
							variant={"filled"}
							fullWidth
						>
							<Text fw={"400"} px={"xl"}>
								Send
							</Text>
						</Button>
					</GridCol>
				</Grid>
			</Container>
		</Section>
	);
};

export default About;
