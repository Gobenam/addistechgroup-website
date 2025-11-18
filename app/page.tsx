import PageTransition from "@/animations/page-transition";
import GetComponent from "@/libs/get-component";
import { getPageMetadata } from "@/libs/get-page-metadata";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
	return getPageMetadata("home");
};

export default async function Home() {
	return (
		<PageTransition>
			<GetComponent slug={"home"} />
		</PageTransition>
	);
}
