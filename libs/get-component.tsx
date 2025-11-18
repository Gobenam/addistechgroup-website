import About from "@/components/about";
import Banner from "@/components/banner";
import BuildIotCard from "@/components/build-iot-card";
import GetIotCard from "@/components/get-iot-card";
import Section from "@/components/section";
import { ABOUT, BUILD_IOT, GET_IOT } from "@/data/iot-solutions";
import { NAV_LINKS } from "@/data/nav-link";
import { Text } from "@mantine/core";

const GetComponent = ({ slug }: { slug: string }) => {
	if (slug === "home") {
		return <Banner bgColor={{ light: "gray.0", dark: "dark.9" }} bgImg="/images/home-bg.jpg" />;
	}

	const parent = NAV_LINKS.find((link) => {
		return link.href === slug;
	});

	if (parent) {
		return <About title={ABOUT.title} description={ABOUT.description} />;
	}

	const child = NAV_LINKS.find((link) => {
		return link.links?.find((item) => {
			return item.href === slug;
		});
	});

	if (child) {
		if (child.href === "get-iot") {
			const data = GET_IOT.find((d) => d.slug === slug);
			return (
				<Section>
					<GetIotCard
						title={data!.title}
						subTitle={data!.subTitle}
						img={data!.image}
						description={data!.description}
					/>
				</Section>
			);
		} else {
			const data = BUILD_IOT.find((d) => d.slug === slug);
			return (
				<Section>
					<BuildIotCard
						title={data!.title}
						subTitle={data!.subTitle}
						img={data!.image}
						description={data!.description}
					/>
				</Section>
			);
		}
	}

	return <Text>not found</Text>;
};

export default GetComponent;
