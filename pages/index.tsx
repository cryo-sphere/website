import type { GetStaticPropsContext, NextPage } from "next";
import { i18n, useTranslation } from "next-i18next";
import MetaTitle from "../components/general/metaTitle";
import { InviteSection, SmallSection, TopSection } from "../components/pages/landing";
import { loadTranslations } from "../utils/i18n";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
	const translations = await loadTranslations(i18n!, locale ?? "en", ["landing"]);
	return {
		props: {
			...translations
		}
	};
};

const Home: NextPage = () => {
	const { t } = useTranslation();

	return (
		<>
			<MetaTitle title="Stereo - Free high quality music everywhere. For all." />
			<TopSection t={t} />
			<SmallSection t={t} />
			<InviteSection t={t} />
		</>
	);
};

export default Home;
