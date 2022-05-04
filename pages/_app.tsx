import "../styles/index.scss";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Navbar from "../components/general/navbar";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
};

export default appWithTranslation(App);
