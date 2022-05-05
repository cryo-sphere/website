import type { GetStaticPropsContext, NextPage } from "next";
import Page from "../components/general/page";
import { loadTranslations } from "../utils/i18n";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
	const translations = await loadTranslations(locale ?? "en");
	return {
		props: {
			...translations
		}
	};
};

const NoteSvg = () => (
	<svg className="home-background-svg" width="1016" height="1342" viewBox="0 0 1016 1342" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_419_2)">
			<path
				d="M893.301 14.3607C882.982 12.2669 872.256 14.5929 863.729 20.7707L322.712 418.77C307.48 429.966 303.107 450.827 312.56 467.197L643.009 1039.55C603.844 1038.94 565.259 1049.06 531.435 1068.81C442.89 1119.93 404.116 1219.14 445.021 1289.99C485.925 1360.84 591.23 1376.87 679.774 1325.75C768.319 1274.63 807.11 1175.45 766.187 1104.57L486.194 619.605L967.019 265.69L1183.97 641.456C1144.81 640.883 1106.25 651.034 1072.45 670.811C983.903 721.934 945.132 821.142 986.037 891.992C1026.94 962.841 1132.25 978.868 1220.79 927.746C1309.34 876.625 1348.13 777.448 1307.2 706.566L917.808 32.1149C912.535 22.9804 903.623 16.5235 893.301 14.3607Z"
				fill="white"
				fillOpacity="0.05"
			/>
		</g>
		<defs>
			<clipPath id="clip0_419_2">
				<rect width="1038.39" height="1038.39" fill="white" transform="translate(0 519.193) rotate(-30)" />
			</clipPath>
		</defs>
	</svg>
);

const Home: NextPage = () => {
	return (
		<Page>
			<NoteSvg />
			<h1>Template</h1>
		</Page>
	);
};

export default Home;
