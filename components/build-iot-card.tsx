"use client";

import { scrollToBottom } from "@/animations/scroll-to-bottom";
import {
	BackgroundImage,
	Box,
	Button,
	Card,
	List,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import ReactMarkdown from "react-markdown";
import { FaCheck } from "react-icons/fa6";
import remarkGfm from "remark-gfm";

const BuildIotCard = ({
	title,
	subTitle,
	description,
	img,
}: {
	title: string;
	subTitle?: string;
	description: string;
	img?: string;
}) => {
	const { hovered, ref } = useHover();
	return (
		<BackgroundImage
			src={img ?? ""}
			mt={"-8"}
			py={"xl"}
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
			<Stack align="center" p={{ base: "md", md: "xl" }} my={"xl"}>
				<Card
					p={"xl"}
					mb={"xl"}
					withBorder
					maw={"90vw"}
					radius={"md"}
					style={{
						backdropFilter: "blur(6px)",
						backgroundColor: "rgba(0, 0, 0, 0.7)",
						boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
					}}
				>
					{subTitle && (
						<Text c={"gray"} fz={"h2"} mt={"xl"}>
							{subTitle}
						</Text>
					)}
					<Title c={"gray"} fz={{ base: "h1", md: "55" }} fw={"400"} mt={subTitle ? "sm" : "xl"}>
						{title}
					</Title>
					<Box c={"gray.5"} my={"xl"}>
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
							Call to Order
						</Text>
					</Button>
				</Card>
			</Stack>
		</BackgroundImage>
	);
};
export default BuildIotCard;
