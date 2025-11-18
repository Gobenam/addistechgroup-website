import { animate } from "framer-motion";

export const scrollToBottom = () => {
	const targetY = document.documentElement.scrollHeight - window.innerHeight;

	animate(window.scrollY, targetY, {
		duration: 0.6,
		ease: "easeInOut",
		onUpdate(latest) {
			window.scrollTo(0, latest);
		},
	});
};
