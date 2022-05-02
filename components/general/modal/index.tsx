import { AnimatePresence } from "framer-motion";
import React from "react";
import type { ReactFC } from "../../../utils/types";
import ModalItem from "./ModalItem";

interface Props {
	onClick: () => void;
	isOpen: boolean;
}

const Modal: ReactFC<Props> = ({ children, onClick, isOpen }) => {
	return <AnimatePresence exitBeforeEnter>{isOpen && <ModalItem onClick={onClick}>{children}</ModalItem>}</AnimatePresence>;
};

export default Modal;
