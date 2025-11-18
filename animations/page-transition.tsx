"use client";

import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.7, ease: "easeInOut" }}
				style={{ position: "relative" }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};
export default PageTransition;
