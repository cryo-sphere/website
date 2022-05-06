import type { TFunction } from "next-i18next";
import { capitalise } from "../../../utils/string";
import type { ReactFC } from "../../../utils/types";
import Button from "../../general/button";
import Page from "../../general/page";

interface Props {
	t: TFunction;
}

export const InviteSection: ReactFC<Props> = ({ t }) => {
	const invite = capitalise(t("common:invite"));
	const title = capitalise(t("landing:invite.title"));
	const desc = t("landing:invite.desc", { invite_var: invite });

	return (
		<Page className="invite-section">
			<div className="landing-small-section-container">
				<div className="landing-small-title">
					<h3 className="landing-small-title-text">{title}</h3>
					<p className="landing-small-desc">{desc}</p>
				</div>
				<Button title={invite} style="main" type="link" path="/invite" external />
			</div>
		</Page>
	);
};
