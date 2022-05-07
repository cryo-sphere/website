import { useTranslation } from "next-i18next";
import type { ReactFC } from "../../../utils/types";
import Button from "../button";
import Page from "../page";
import FooterCreditsLink from "./FooterCreditsLink";
import { useRouter } from "next/router";
import Select from "../select";
import { useCookies } from "react-cookie";

const Footer: ReactFC = () => {
	const { i18n } = useTranslation();
	const { locales, locale } = useRouter();
	const [, setCookie] = useCookies(["NEXT_LOCALE"]);

	const currentLocale = locale ?? "en";
	const supportedLocales = locales ?? ["en"];
	const languages = new Intl.DisplayNames(currentLocale, { type: "language" });
	const options = supportedLocales.map((lang) => ({ label: languages.of(lang) ?? lang, value: lang }));

	const onSelectChange = (option: { label: string; value: any }) => {
		setCookie("NEXT_LOCALE", option.value);
		void i18n.changeLanguage(option.value);
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
						<Button type="link" style="string" path="/discord" title="Support" external />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/github" title="GitHub" external />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/paypal" title="PayPal" external />
					</li>
				</ul>
				<ul className="footer-links-list">
					<li className="footer-links-title">Links</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/commands" title="Commands" />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/faq" title="FAQ" />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/status" title="Status" external />
					</li>
				</ul>
				<ul className="footer-links-list">
					<li className="footer-links-title">Legal</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/tos" title="Terms of Service" />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/privacy-policy" title="Privacy Policy" />
					</li>
					<li className="footer-links-link">
						<Button type="link" style="string" path="/credits" title="Credits" />
					</li>
				</ul>
			</div>
			<div className="footer-bottom-container">
				<span className="footer-bottom-credits">
					<i className="fa-solid fa-code" /> with <i className="fa-solid fa-heart" /> by{" "}
					<Button type="link" style="string" path="/github/website" title="the Stereo team" />
				</span>
				<Select
					id="long-value-select"
					instanceId="long-value-select"
					options={options}
					menuPlacement="top"
					defaultInputValue={currentLocale}
					/* @ts-ignore annoying onChange select typing with multivalue */
					onChange={onSelectChange}
				/>
			</div>
		</Page>
	);
};

export default Footer;
