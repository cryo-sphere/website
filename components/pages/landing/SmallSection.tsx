import type { TFunction } from "next-i18next";
import type { ReactFC } from "../../../utils/types";
import Page from "../../general/page";
import { SmallSectionComp } from "./SmallSectionComp";

interface Props {
	t: TFunction;
}

export const SmallSection: ReactFC<Props> = () => {
	const listLeft = [
		{
			title: "Money, which money?",
			desc: "Stereo is and will always be 100% free with no hidden costs.",
			icon: "fa-solid fa-sack-dollar"
		},
		{
			title: "Downtime? That doesn’t exist.",
			desc: "You won’t miss a single note with 99.99% guaranteed uptime.",
			icon: "fa-solid fa-server"
		},
		{
			title: "Commands? So outdated.",
			desc: "Yes, we have a webplayer too! Now you can do whatever you want from the web, no more switching to Discord.",
			icon: "fa-solid fa-sliders"
		}
	];

	const listRight = [
		{
			title: "Money, which money?",
			desc: "Change all the settings to your likings with one click of a button on the dashboard.",
			icon: "fa-solid fa-gears"
		},
		{
			title: "ughh, I hate using YouTube. 😠",
			desc: "	Don’t worry, we got you covered! We support SoundCloud playback too! Spotify and Deezer are supported as search aswell!",
			icon: "fa-solid fa-radio"
		},
		{
			title: "Playlists, full of songs to listen to..",
			desc: "Stereo has it’s own playlist feature which allows you to store playable audio links with ease.",
			icon: "fa-solid fa-list"
		}
	];

	return (
		<Page className="small-section">
			<div className="landing-small-section-container">
				<div className="landing-small-title">
					<h3 className="landing-small-title-text">Still not convinced?</h3>
					<p className="landing-small-desc">Don’t worry, we aren’t done yet!</p>
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
						{/* <div className="landing-small-topic">
							<div className="landing-small-topic-icon">
								<i id="special" className="fa-solid fa-gears" />
							</div>
							<div className="landing-small-topic-text">
								<h1>Who doesn’t like dashboards?</h1>
								<p>Change all the settings to your likings with one click of a button on the dashboard.</p>
							</div>
						</div>
						<div className="landing-small-topic">
							<div className="landing-small-topic-icon">
								<i className="fa-solid fa-radio" />
							</div>
							<div className="landing-small-topic-text">
								<h1>ughh, I hate using YouTube. 😠</h1>
								<p>
									Don’t worry, we got you covered! We support SoundCloud playback too! Spotify and Deezer are supported as search
									aswell!
								</p>
							</div>
						</div>
						<div className="landing-small-topic">
							<div className="landing-small-topic-icon">
								<i className="fa-solid fa-list" />
							</div>
							<div className="landing-small-topic-text">
								<h1>Playlists, full of songs to listen to.</h1>
								<p>Stereo has it’s own playlist feature which allows you to store playable audio links with ease.</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</Page>
	);
};
