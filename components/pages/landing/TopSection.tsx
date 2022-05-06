import type { TFunction } from "next-i18next";
import { capitalise } from "../../../utils/string";
import type { ReactFC } from "../../../utils/types";
import Button from "../../general/button";
import Page from "../../general/page";
import { BigSectionComp } from "./BigSectionComp";
import { NotesAnimationSvg, NoteSvg } from "./Svgs";

interface Props {
	t: TFunction;
}

export const TopSection: ReactFC<Props> = ({ t }) => {
	const dashboard_var = t("navigation:dashboard");
	const commands_var = t("navigation:commands");

	const BigList = [
		{
			title: `Never gonna give...${t("common:karaoke")} up`,
			desc: t("landing:big_section.filters"),
			img: "/content/landing/karaoke.svg",
			imgId: "one"
		},
		{
			title: "Nobody can hurt me, no more",
			desc: t("landing:big_section.permissions", { dashboard_var, commands_var }),
			img: "/content/landing/permissions.svg",
			imgId: "two"
		},
		{
			title: "Around the world, around the world...",
			desc: t("landing:big_section.multilingual"),
			img: "/content/landing/languages.svg",
			imgId: "three"
		}
	];

	return (
		<Page>
			<NoteSvg />
			<div className="landing-top-section">
				<div className="landing-top-left">
					<h1 className="landing-top-title">Stereo</h1>
					<p className="landing-top-desc">Free high quality music everywhere. For all.</p>
					<div className="landing-top-buttons">
						<Button title={capitalise(t("common:invite"))} style="main" type="link" path="/invite" external />
						<Button title={capitalise(t("navigation:dashboard"))} style="secondary" type="link" path="/dashboard" />
					</div>
				</div>
				<div className="landing-top-right">
					<div className="jukebox-animation">
						<object className="jukebox-animation-jukebox" type="image/svg+xml" data="/content/landing/jukebox.svg" />
						<NotesAnimationSvg />
					</div>
				</div>
			</div>

			<div className="landing-big-section-container">
				{BigList.map((item) => (
					<BigSectionComp key={item.imgId} {...item} />
				))}
			</div>
		</Page>
	);
};
