"use client";

import { useEffect } from "react";

export default function DynamicFavicon() {
	useEffect(() => {
		const link =
			(document.querySelector("link[rel*='icon']") as HTMLLinkElement) ||
			document.createElement("link");
		link.type = "image/x-icon";
		link.rel = "shortcut icon";
		link.href = "/images/logo.svg";
		document.head.appendChild(link);
	}, []);

	return null;
}
