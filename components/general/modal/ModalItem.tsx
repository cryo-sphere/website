import { motion, Variants } from "framer-motion";
import React from "react";
import type { ReactFC } from "../../../utils/types";
import BackDrop from "./Backdrop";

const variants: Variants = {
	hidden: {
		// y: "-100vh",
		scale: 0,
		opacity: 0
	},
	visible: {
		// y: "0",
		scale: 1,
		opacity: 1,
		transition: {
			// duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500
		}
	},
	exit: {
		// y: "100vh",
		scale: 0,
		opacity: 0,
		transition: {
			duration: 0.3
		}
	}
};

interface Props {
	onClick: () => void;
}

const ModalItem: ReactFC<Props> = ({ children, onClick }) => {
	return (
		<BackDrop onClick={onClick}>
			<motion.div onClick={(e) => e.stopPropagation()} className="modal" variants={variants} initial="hidden" animate="visible" exit="exit">
				{children}
			</motion.div>
		</BackDrop>
	);
};

export default ModalItem;
