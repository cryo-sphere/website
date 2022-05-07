import Link from "next/link";
import type { ReactFC } from "../../../utils/types";

interface PropsButton {
	title: string;
	style: "main" | "secondary-nav" | "secondary" | "danger" | "string";
	external?: boolean;

	type: "button";
	onClick: () => void;
}

interface PropsLink {
	title: string;
	style: "main" | "secondary-nav" | "secondary" | "danger" | "string";
	external?: boolean;

	type: "link";
	path: string;
	onClick?: () => void;
}

type Props = { type: "link" | "button" } & (PropsButton | PropsLink);

const Button: ReactFC<Props> = (props) => {
	const { style, title, type, external, onClick } = props;
	const className = `button button-${style}`;

	return type === "button" ? (
		<button className={className} onClick={onClick}>
			{external && <i className="fa-solid fa-arrow-up-right-from-square" />} {title}
		</button>
	) : (
		<Link href={props.path}>
			<a onClick={onClick} className={className}>
				{external && <i className="fa-solid fa-arrow-up-right-from-square" />} {title}
			</a>
		</Link>
	);
};

export default Button;
