import type { ReactFC } from "../../../utils/types";

interface Props {
	className?: string;
}

const Page: ReactFC<Props> = ({ children, className }) => {
	return (
		<div className={`page-wrapper ${className}`}>
			<div className="page-container">{children}</div>
		</div>
	);
};

export default Page;
