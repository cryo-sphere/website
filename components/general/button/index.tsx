import Link from "next/link";
import type { ReactFC } from "../../../utils/types";

interface PropsButton {
	title: string;
	style: "main" | "secondary-nav" | "secondary" | "danger";

	type: "button";
	onClick: () => void;
}

interface PropsLink {
	title: string;
	style: "main" | "secondary-nav" | "secondary" | "danger";

	type: "link";
	path: string;
}

type Props = { type: "link" | "button" } & (PropsButton | PropsLink);

const Button: ReactFC<Props> = (props) => {
	const { style, title, type } = props;
	const className = `button button-${style}`;

	return type === "button" ? (
		<button className={className} onClick={props.onClick}>
			{title}
		</button>
	) : (
		<Link href={props.path}>
			<a className={className}>{title}</a>
		</Link>
	);
};

export default Button;
