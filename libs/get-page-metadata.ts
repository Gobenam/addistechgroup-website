import { ABOUT, BUILD_IOT, GET_IOT, HOME } from "@/data/iot-solutions";
import { NAV_LINKS } from "@/data/nav-link";

interface metaProps {
	title: string;
	description: string;
	slug: string;
}

export async function getPageMetadata(slug: string) {
	let meta: metaProps = HOME;

	const parent = NAV_LINKS.find((link) => {
		return link.href === slug;
	});

	if (parent) {
		meta = ABOUT;
	}

	const child = NAV_LINKS.find((link) => {
		return link.links?.find((item) => {
			return item.href === slug;
		});
	});

	if (child) {
		if (child.href === "get-iot") {
			const data: metaProps | undefined = GET_IOT.find((d) => d.slug === slug);
			meta = data ?? meta;
		} else {
			const data: metaProps | undefined = BUILD_IOT.find((d) => d.slug === slug);
			meta = data ?? meta;
		}
	}

	return {
		title: meta.title,
		description: meta.description,
		openGraph: {
			title: meta.title,
			description: meta.description,
			images: [
				{
					url: `/og?slug=${encodeURIComponent(meta.slug)}&title=${encodeURIComponent(
						meta.title
					)}&description=${encodeURIComponent(meta.description)}`,
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: meta.title,
			description: meta.description,
			images: [
				`/og?slug=${encodeURIComponent(meta.slug)}&title=${encodeURIComponent(
					meta.title
				)}&description=${encodeURIComponent(meta.description)}`,
			],
		},
	};
}
