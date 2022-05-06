import type { I18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const loadTranslations = async (i18n: I18n | null, locale: string | undefined, ns: string[] = []) => {
	if (process.env.NODE_ENV === "development") await i18n?.reloadResources();
	return serverSideTranslations(locale ?? "en", [...ns, "navigation", "common"]);
};
