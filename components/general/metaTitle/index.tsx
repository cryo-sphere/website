import Head from "next/head";
import type { ReactFC } from "../../../utils/types";

interface Props {
	title: string;
}

const MetaTitle: ReactFC<Props> = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
		</Head>
	);
};

export default MetaTitle;
