"use client";

import { scrollToBottom } from "@/animations/scroll-to-bottom";
import {
	Box,
	Button,
	Divider,
	Grid,
	GridCol,
	Image,
	List,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import NextImage from "next/image";
import { FaCheck } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const GetIotCard = ({
	title,
	subTitle,
	description,
	img,
}: {
	title: string;
	subTitle: string;
	description: string;
	img?: string;
}) => {
	const { hovered, ref } = useHover();
	return (
		<Grid pb={"xl"}>
			<GridCol span={{ base: 12, md: 4 }} p={0}>
				<Image
					src={img ?? "/images/home-bg.jpg"}
					component={NextImage}
					mb={"xl"}
					pb={"xl"}
					width={500}
					height={500}
					alt={title}
					priority={true}
					style={{
						width: "100%",
						height: "auto",
					}}
				/>
			</GridCol>
			<GridCol offset={{ base: 0, md: 1 }} span={{ base: 12, md: 7 }} mt={"lg"} px={"xl"} mb={"xl"}>
				<Text c={"gray"} fz={{ base: "h3", md: "h2" }} mt={"xl"}>
					{subTitle}
				</Text>
				<Title c={"gray"} fz={{ base: "h1", md: "55" }} fw={"400"} mt={"sm"}>
					{title}
				</Title>
				<Divider color={"gray.0"} w={"70"} my={"md"} />
				<Box c={"gray.5"} my={"xl"} maw={"730px"}>
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						components={{
							p: ({ ...props }) => <Text style={{ marginBottom: "1rem" }} {...props} />,
							ul: ({ ...props }) => (
								<List
									icon={
										<ThemeIcon c={"ocean-blue"} size={20} variant="transparent">
											<FaCheck size={16} />
										</ThemeIcon>
									}
									style={{ marginBottom: "1rem" }}
									{...props}
								/>
							),
							li: ({ ...props }) => <List.Item {...props} />,
						}}
					>
						{description}
					</ReactMarkdown>
				</Box>
				<Button
					ref={ref}
					size={"lg"}
					my={"xl"}
					color={"ocean-blue"}
					variant={hovered ? "outline" : "filled"}
					onClick={scrollToBottom}
				>
					<Text fz={"sm"} fw={"400"} px={"xl"}>
						Request a Demo
					</Text>
				</Button>
			</GridCol>
		</Grid>
	);
};
export default GetIotCard;
