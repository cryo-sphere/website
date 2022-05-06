import type { TFunction } from "next-i18next";
import { capitalise } from "../../../utils/string";
import type { ReactFC } from "../../../utils/types";
import Button from "../../general/button";
import Page from "../../general/page";
import { NotesAnimationSvg, NoteSvg } from "./Svgs";

interface Props {
	t: TFunction;
}

export const TopSection: ReactFC<Props> = ({ t }) => {
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
				<div className="landing-big-section">
					<div className="landing-big-section-text">
						<h1 className="landing-big-title">Never gonna give... karaoke up</h1>
						<p className="landing-big-text">
							Apply your favourite filters like Karaoke. Play with it all day long, they will never let you down.
						</p>
					</div>
					<img id="one" className="landing-big-image" src="/content/landing/karaoke.svg" alt="karaoke image" />
				</div>
				<div className="landing-big-section">
					<img id="two" className="landing-big-image" src="/content/landing/permissions.svg" alt="karaoke image" />
					<div className="landing-big-section-text">
						<h1 className="landing-big-title">Nobody can hurt me, no more</h1>
						<p className="landing-big-text">
							Turn of commands for certain users or roles with one click of a button on the dashboard. Now they can’t mess with the bot
							anymore!
						</p>
					</div>
				</div>
				<div className="landing-big-section">
					<div className="landing-big-section-text">
						<h1 className="landing-big-title">Around the world, around the world...</h1>
						<p className="landing-big-text">
							Stereo is used by hundreds of users across the globe and not everyone speaks English, that’s why Stereo is translated in
							multiple different languages so everyone can experience the fun and high quality audio their way.
						</p>
					</div>
					<img id="three" className="landing-big-image" src="/content/landing/languages.svg" alt="karaoke image" />
				</div>
			</div>
		</Page>
	);
};
