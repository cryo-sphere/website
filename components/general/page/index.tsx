import type { ReactFC } from "../../../utils/types";

const Page: ReactFC = ({ children }) => {
	return (
		<div className="page-wrapper">
			<div className="page-container">{children}</div>
		</div>
	);
};

export default Page;
