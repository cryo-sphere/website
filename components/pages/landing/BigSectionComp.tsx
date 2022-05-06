import type { ReactFC } from "../../../utils/types";
import { useInView } from "react-intersection-observer";
import { useAnimation, Variants, motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
	title: string;
	desc: string;
	img: string;
	imgId: string;
}

export const BigSectionComp: ReactFC<Props> = ({ title, desc, img, imgId }) => {
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
		<motion.div ref={ref} animate={controls} variants={variants} initial="hidden" className="landing-big-section">
			<div className="landing-big-section-text">
				<h1 className="landing-big-title">{title}</h1>
				<p className="landing-big-text">{desc}</p>
			</div>
			<img id={imgId} className="landing-big-image" src={img} alt="karaoke image" />
		</motion.div>
	);
};
