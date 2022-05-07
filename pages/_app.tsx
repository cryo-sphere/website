import "../styles/index.scss";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Navbar from "../components/general/navbar";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name="title" content="Stereo" />
				<meta name="description" content="Free high quality music everywhere. For all." />
				<meta name="keywords" content="music, discord, free, discord-bot, music-bot, open-source" />
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				<meta name="theme-color" content="#78a4fa" />
				<meta property="og:site_name" content="Stereo" />
				<meta property="og:title" content="Stereo" />
				<meta property="og:type" content="site" />
				<meta property="og:url" content="https://stereo-bot.xyz" />
				<meta property="og:description" content="Free high quality music everywhere. For all." />
				<meta property="og:image" content="/logo.png" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
};

export default appWithTranslation(App);
