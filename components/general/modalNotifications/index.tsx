import type { ReactFC } from "../../../utils/types";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";

interface Props {
	title: string;
	icon: "success";

	enabled: boolean;
}

const DivVariants: Variants = {
	initial: { top: -100, width: 50, borderRadius: 100 },
	entry1: {
		top: 50,
		opacity: 1,
		transition: {
			duration: 0.5,
			bounce: 0.4,
			type: "spring"
		}
	},
	entry2: {
		width: "fit-content",
		borderRadius: 15,
		transition: {
			delay: 0.2,
			duration: 2,
			ease: [0.6, 0, 0.17, 1]
		}
	},
	exit1: {
		top: -50,
		opacity: 0,
		transition: {
			duration: 0.5
		}
	},
	exit2: {
		top: -100,
		width: 50,
		borderRadius: 100,
		transition: {
			delay: 0.5,
			duration: 0.01
		}
	}
};

const iconVariants: Variants = {
	initial: { opacity: 0, marginLeft: 12 },
	entry: { opacity: 1, marginLeft: 7, transition: { delay: 0.3, duration: 0.1 } },
	exit: {
		opacity: 0,
		marginLeft: 12,
		transition: {
			duration: 0.01,
			delay: 0.5
		}
	}
};

const textVariants: Variants = {
	initial: { opacity: 0 },
	entry: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
	exit: {
		opacity: 0,
		transition: {
			duration: 0.01,
			delay: 0.5
		}
	}
};

const ModalNotifications: ReactFC<Props> = ({ title, icon, enabled }) => {
	const getIcon = () => {
		switch (icon) {
			case "success":
				return <i className="fa-solid fa-check" />;
		}
	};

	const divController = useAnimation();
	const iconController = useAnimation();
	const textController = useAnimation();
	useEffect(() => {
		if (enabled) {
			void divController.start("entry1");
			void divController.start("entry2");

			void iconController.start("entry");
			void textController.start("entry");
		} else {
			void divController.start("exit1");
			void divController.start("exit2");

			void iconController.start("exit");
			void textController.start("exit");
		}

		return () => {
			divController.stop();
			iconController.stop();
			textController.stop();
		};
	}, [enabled]);

	return (
		<motion.div initial="initial" variants={DivVariants} animate={divController} className="modal-notification">
			<motion.span variants={iconVariants} initial="initial" animate={iconController} className="modal-notification-icon">
				{getIcon()}
			</motion.span>
			<motion.span variants={textVariants} initial="initial" animate={textController} className="modal-notification-text">
				{title}
			</motion.span>
		</motion.div>
	);
};

export default ModalNotifications;
