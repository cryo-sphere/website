import { useTranslation } from "next-i18next";
import type { ReactFC } from "../../../utils/types";
import Page from "../page";
import FooterCreditsLink from "./FooterCreditsLink";

const Footer: ReactFC = () => {
	const { t } = useTranslation();

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
		</Page>
	);
};

export default Footer;
