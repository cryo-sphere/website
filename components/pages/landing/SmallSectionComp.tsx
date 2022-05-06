import type { ReactFC } from "../../../utils/types";
import { useInView } from "react-intersection-observer";
import { useAnimation, Variants, motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
	title: string;
	desc: string;
	icon: string;
}

export const SmallSectionComp: ReactFC<Props> = ({ title, desc, icon }) => {
	const [ref, inView] = useInView({ threshold: 0.5 });
	const controls = useAnimation();

	const variants: Variants = {
		hidden: { opacity: 0, transform: "translateY(20px)" },
		visible: { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.3, easings: "easeOut" } }
	};

	useEffect(() => {
		if (inView) void controls.start("visible");

		return () => controls.stop();
	}, [inView]);

	return (
		<motion.div ref={ref} animate={controls} variants={variants} initial="hidden" className="landing-small-topic">
			<div className="landing-small-topic-icon">
				<i className={icon} />
			</div>
			<div className="landing-small-topic-text">
				<h1>{title}</h1>
				<p>{desc}</p>
			</div>
		</motion.div>
	);
};
