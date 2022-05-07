import Link from "next/link";
import type { ReactFC } from "../../../utils/types";

interface Props {
	path: string;
	onClick?: () => void;
}

const FooterCreditsLink: ReactFC<Props> = ({ path, children, onClick }) => {
	return (
		<Link href={path}>
			<a target="_blank" rel="noopener noreferrer" onClick={onClick}>
				{children}
			</a>
		</Link>
	);
};

export default FooterCreditsLink;
