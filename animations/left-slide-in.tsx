"use client";

import { motion } from "framer-motion";

const LeftSlideIn = ({ children, duration }: { children: React.ReactNode; duration: number }) => {
	return (
		<motion.div
			initial={{ x: "-5vw", opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration, ease: "easeInOut" }}
		>
			{children}
		</motion.div>
	);
};
export default LeftSlideIn;
