import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const loadTranslations = (locale: string | undefined, ns: string[] = []) =>
	serverSideTranslations(locale ?? "en", [...ns, "navigation", "common"]);
