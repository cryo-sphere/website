import { useTranslation } from "next-i18next";
import type { ReactFC } from "../../../utils/types";
import Button from "../button";
import Page from "../page";
import FooterCreditsLink from "./FooterCreditsLink";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { capitalise } from "../../../utils/string";
import { Option, SingleSelect } from "../select";
import type { SingleValue } from "react-select";
import { useState } from "react";
import { MultiSelect } from "../select/MultiSelect";

const ExceptionFlags: Record<string, string> = {
	en: "https://flagcdn.com/gb.svg"
};

const Footer: ReactFC = () => {
	const { t } = useTranslation();
	const { locales, locale, route, push } = useRouter();
	const [, setCookie] = useCookies(["NEXT_LOCALE"]);

	const currentLocale = locale ?? "en";
	const supportedLocales = locales ?? ["en"];
	const languages = new Intl.DisplayNames(currentLocale, { type: "language" });
	const options = supportedLocales.map<Option>((lang) => ({
		label: languages.of(lang) ?? lang,
		value: lang,
		icon: { type: "image", image: ExceptionFlags[lang] ?? `https://flagcdn.com/${lang}.svg` }
	}));

	const [selectedLang, setSelectedLang] = useState<Option>({
		label: languages.of(currentLocale) ?? currentLocale,
		value: currentLocale,
		icon: { type: "image", image: ExceptionFlags[currentLocale] ?? `https://flagcdn.com/${currentLocale}.svg` }
	});

	const onSelectChange = (option: SingleValue<Option>) => {
		if (option) {
			setCookie("NEXT_LOCALE", option.value);
			setSelectedLang(option);
			void push(route, undefined, { locale: option.value });
		}
	};

	return (
		<Page className="footer-container">
			<div className="footer-top-container">
				<div className="footer-logo-container">
					<div className="footer-logo">
						<img className="footer-logo-image" alt="logo" src="/logo.png" />
						<h1 className="footer-logo-text">Stereo</h1>
					</div>
					<p className="footer-logo-slogan">Free high quality music everywhere. For all.</p>
				</div>
				<div className="footer-credits-container">
					<FooterCreditsLink path="/crowdin">
						<img id="crowdin" src="/content/footer/crowdin.svg" alt="crowdin" />
					</FooterCreditsLink>
					<FooterCreditsLink path="https://vercel.com/?utm_source=stereo-bot&utm_campaign=oss">
						<img src="/vercel.svg" alt="vercel" />
					</FooterCreditsLink>
				</div>
			</div>
			<div className="footer-center-container">
				<ul className="footer-links-list">
					<li id="brand" className="footer-links-title">
						Stereo
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/discord" title={capitalise(t("navigation:support_server"))} external />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/github" title="GitHub" external />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/paypal" title="PayPal" external />
					</li>
				</ul>
				<ul className="footer-links-list">
					<li className="footer-links-title">{capitalise(t("navigation:links"))}</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/commands" title={capitalise(t("navigation:commands"))} />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/faq" title="FAQ" />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/status" title={capitalise(t("navigation:status"))} external />
					</li>
				</ul>
				<ul className="footer-links-list">
					<li className="footer-links-title">{capitalise(t("navigation:other"))}</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/tos" title={t("navigation:tos")} />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/privacy-policy" title={t("navigation:privacy_policy")} />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/credits" title={capitalise(t("navigation:credits"))} />
					</li>
				</ul>
			</div>
			<div className="footer-bottom-container">
				<span className="footer-bottom-credits">
					<i className="fa-solid fa-code" /> with <i className="fa-solid fa-heart" /> by{" "}
					<Button type="link" style="string" path="/github/website" title="the Stereo team" />
				</span>
				<SingleSelect instanceId="language-select" options={options} menuPlacement="top" value={selectedLang} onChange={onSelectChange} />
				<MultiSelect instanceId="language-select" options={options} menuPlacement="top" />
			</div>
		</Page>
	);
};

export default Footer;
