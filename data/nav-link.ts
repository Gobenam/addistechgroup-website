import { BUILD_IOT, GET_IOT } from "./iot-solutions";

const GET_IOT_LINKS = GET_IOT.map((iot) => {
	return { href: `${iot.slug}`, label: iot.title };
});
const BUILD_IOT_LINKS = BUILD_IOT.map((iot) => {
	return { href: `${iot.slug}`, label: iot.title };
});

export const NAV_LINKS = [
	{ href: "get-iot", label: "Get our IoT Solutions", links: GET_IOT_LINKS },
	{ href: "build-iot", label: "Build Your Own IoT", links: BUILD_IOT_LINKS },
	{ href: "about-us", label: "About Us" },
];
