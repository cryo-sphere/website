import type { TFunction } from "next-i18next";
import { capitalise } from "../../../utils/string";
import type { ReactFC } from "../../../utils/types";
import Page from "../../general/page";
import { SmallSectionComp } from "./SmallSectionComp";

interface Props {
	t: TFunction;
}

export const SmallSection: ReactFC<Props> = ({ t }) => {
	const yes_var = t("common:yes");
	const webplayer_var = t("navigation:webplayer");
	const playlists_var = t("navigation:playlist");
	const dashboard_var = t("navigation:dashboard");

	const listLeft = [
		{
			title: t("landing:small_section.money.title"),
			desc: t("landing:small_section.money.desc"),
			icon: "fa-solid fa-sack-dollar"
		},
		{
			title: t("landing:small_section.downtime.title"),
			desc: t("landing:small_section.downtime.desc"),
			icon: "fa-solid fa-server"
		},
		{
			title: t("landing:small_section.webplayer.title"),
			desc: capitalise(t("landing:small_section.webplayer.desc", { yes_var, webplayer_var })),
			icon: "fa-solid fa-sliders"
		}
	];

	const listRight = [
		{
			title: t("landing:small_section.dashboard.title"),
			desc: t("landing:small_section.dashboard.desc", { dashboard_var }),
			icon: "fa-solid fa-gears"
		},
		{
			title: t("landing:small_section.multiplatform.title"),
			desc: t("landing:small_section.multiplatform.desc"),
			icon: "fa-solid fa-radio"
		},
		{
			title: capitalise(t("landing:small_section.playlists.title", { playlists_var })),
			desc: t("landing:small_section.playlists.desc"),
			icon: "fa-solid fa-list"
		}
	];

	return (
		<Page className="small-section">
			<div className="landing-small-section-container">
				<div className="landing-small-title">
					<h3 className="landing-small-title-text">{t("landing:small_section.title").toString()}</h3>
					<p className="landing-small-desc">{t("landing:small_section.desc").toString()}</p>
				</div>
				<div className="landing-small-topics">
					<div className="landing-small-topics-left">
						{listLeft.map((item, key) => (
							<SmallSectionComp key={key} {...item} />
						))}
					</div>
					<div className="landing-small-topics-right">
						{listRight.map((item, key) => (
							<SmallSectionComp key={key} {...item} />
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};
