import type { TFunction } from "next-i18next";
import { capitalise } from "../../../utils/string";
import type { ReactFC } from "../../../utils/types";
import Button from "../../general/button";
import Page from "../../general/page";

interface Props {
	t: TFunction;
}

export const InviteSection: ReactFC<Props> = ({ t }) => {
	return (
		<Page className="invite-section">
			<div className="landing-small-section-container">
				<div className="landing-small-title">
					<h3 className="landing-small-title-text">Join the club</h3>
					<p className="landing-small-desc">Invite Stereo today to listen to high quality audio for free!</p>
				</div>
				<Button title={capitalise(t("common:invite"))} style="main" type="link" path="/invite" external />
			</div>
		</Page>
	);
};
