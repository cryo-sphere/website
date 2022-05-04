import type { ReactFC } from "../../../utils/types";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface Props {
	title: string;
	icon: "success";

	enabled: boolean;
}

const ModalNotifications: ReactFC<Props> = ({ title, icon, enabled }) => {
	const getIcon = () => {
		switch (icon) {
			case "success":
				return <i className="fa-solid fa-check" />;
		}
	};

	const divController = useAnimation();
	useEffect(() => {
		if (enabled) {
			void divController.start({
				top: 50,
				opacity: 1,
				transition: {
					duration: 0.5,
					bounce: 0.4,
					type: "spring"
				}
			});
			void divController.start({
				width: "fit-content",
				borderRadius: 15,
				transition: {
					delay: 0.2,
					duration: 2,
					ease: [0.6, 0, 0.17, 1]
				}
			});
		} else {
			void divController.start({
				top: -50,
				opacity: 0,
				transition: {
					duration: 0.5
				}
			});
		}
	}, [enabled]);

	return (
		<motion.div initial={{ top: -100, width: 50, borderRadius: 100 }} animate={divController} className="modal-notification">
			<motion.span
				initial={{ opacity: 0, marginLeft: 12 }}
				animate={{ opacity: 1, marginLeft: 7, transition: { delay: 0.3, duration: 0.1 } }}
				className="modal-notification-icon"
			>
				{getIcon()}
			</motion.span>
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
				className="modal-notification-text"
			>
				{title}
			</motion.span>
		</motion.div>
	);
};

export default ModalNotifications;
