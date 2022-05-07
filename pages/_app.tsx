import "../styles/index.scss";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Navbar from "../components/general/navbar";
import Head from "next/head";
import Footer from "../components/general/footer";

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

				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#78a4fa" />
				<link rel="shortcut icon" href="/favicons/favicon.ico" />
				<meta name="msapplication-TileColor" content="#78a4fa" />
				<meta name="msapplication-config" content="/favicons/browserconfig.xml" />
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
};

export default appWithTranslation(App);
