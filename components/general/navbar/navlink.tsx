import type { ReactFC } from "../../../utils/types";
import Link from "next/link";

interface Props {
	title: string;
	path: string;

	external?: boolean;
	newWindow?: boolean;
}

const Navlink: ReactFC<Props> = ({ title, path, external, newWindow }) => {
	return (
		<Link href={path}>
			<a className="navbar-navlink" target={newWindow ? "_blank" : undefined} rel="noopener noreferrer">
				{external && <i className="fa-solid fa-arrow-up-right-from-square" />} {title}
			</a>
		</Link>
	);
};

export default Navlink;
