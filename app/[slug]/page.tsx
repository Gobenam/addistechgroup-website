import PageTransition from "@/animations/page-transition";
import GetComponent from "@/libs/get-component";
import { getPageMetadata } from "@/libs/get-page-metadata";
import { Metadata } from "next";

type Props = {
	params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const path = (await params).slug;
	return getPageMetadata(path);
};

export default async function Home({ params }: Props) {
	const path = (await params).slug;

	return (
		<PageTransition>
			<GetComponent slug={path} />
		</PageTransition>
	);
}
