import type { GetStaticPropsContext, NextPage } from "next";
import { useTranslation } from "next-i18next";
import Button from "../components/general/button";
import Page from "../components/general/page";
import { loadTranslations } from "../utils/i18n";
import { capitalise } from "../utils/string";

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
	const translations = await loadTranslations(locale ?? "en");
	return {
		props: {
			...translations
		}
	};
};

const NoteSvg = () => (
	<svg className="home-background-svg" width="1016" height="1342" viewBox="0 0 1016 1342" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_419_2)">
			<path
				d="M893.301 14.3607C882.982 12.2669 872.256 14.5929 863.729 20.7707L322.712 418.77C307.48 429.966 303.107 450.827 312.56 467.197L643.009 1039.55C603.844 1038.94 565.259 1049.06 531.435 1068.81C442.89 1119.93 404.116 1219.14 445.021 1289.99C485.925 1360.84 591.23 1376.87 679.774 1325.75C768.319 1274.63 807.11 1175.45 766.187 1104.57L486.194 619.605L967.019 265.69L1183.97 641.456C1144.81 640.883 1106.25 651.034 1072.45 670.811C983.903 721.934 945.132 821.142 986.037 891.992C1026.94 962.841 1132.25 978.868 1220.79 927.746C1309.34 876.625 1348.13 777.448 1307.2 706.566L917.808 32.1149C912.535 22.9804 903.623 16.5235 893.301 14.3607Z"
				fill="white"
				fillOpacity="0.05"
			/>
		</g>
		<defs>
			<clipPath id="clip0_419_2">
				<rect width="1038.39" height="1038.39" fill="white" transform="translate(0 519.193) rotate(-30)" />
			</clipPath>
		</defs>
	</svg>
);

const NotesAnimationSvg = () => (
	<svg
		className="landing-notes-animation"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 280 200"
		width="280"
		height="200"
		shapeRendering="geometricPrecision"
		textRendering="geometricPrecision"
	>
		<g id="playme-notes-right" transform="matrix(0.55751 0.256485 -0.256485 0.55751 -97.615604 -136.209744)">
			<g className="landing-notes-animation__note4-group" transform="translate(628.554433,154.494302)">
				<g className="landing-notes-animation__note4-rotate" transform="rotate(2.491167)">
					<g className="landing-notes-animation__note4" transform="scale(0.933596,0.918556) translate(-630.129303,-145.651569)" opacity="0">
						<path
							id="playme-path1"
							d="M633.3,119.9C633.9,121.9,634.6,123.4,637.1,126.2C639.6,129,642.3,130.5,643.6,133.4C643.925497,133.995465,644.16137,134.63569,644.3,135.3C644.808963,137.516518,644.56258,139.839554,643.6,141.9"
							fill="rgba(0,0,0,0)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<path
							id="playme-path2"
							d="M633.3,119.9C633.055764,123.943296,633.88368,127.979382,635.7,131.6C638.1,135.9,640.8,137,642.5,141.1C643.890016,144.608027,644.06603,148.480335,643,152.1"
							fill="rgba(0,0,0,0)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<line
							id="playme-line1"
							x1="633.3"
							y1="121.1"
							x2="633.3"
							y2="166.2"
							fill="rgba(0,0,0,0)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></line>
						<path
							id="playme-path3"
							d="M633.3,166.2C633.5,163,628.7,159.9,624.4,159.9C620.1,159.9,615.7,162.5,615.7,165.6C615.7,168.7,620.4,171.3,624.4,171.4C628.4,171.5,633.1,169.2,633.3,166.2Z"
							fill="rgba(0,0,0,0)"
							stroke="rgb(255,97,216)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</g>
				</g>
			</g>
			<g className="landing-notes-animation__note3-group" transform="translate(599.237024,96.48133)">
				<g className="landing-notes-animation__note3-rotate" transform="rotate(0)">
					<g className="landing-notes-animation__note3" transform="scale(0.847748,0.847748) translate(-622.450806,-142.950005)" opacity="0">
						<polyline
							id="playme-polyline1"
							points="614.8,155 614.8,116.8 647.5,124 647.5,162.9"
							fill="rgba(0,0,0,0)"
							stroke="rgb(255,97,216)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></polyline>
						<path
							id="playme-path4"
							d="M614.8,155.7C614.8,152.6,610.4,150,606.6,149.8C602.8,149.6,597.4,152.6,597.4,155.8C597.4,159,602.1,161.4,606.1,161.4C610.1,161.4,614.8,158.8,614.8,155.7Z"
							fill="rgba(0,0,0,0)"
							stroke="rgb(255,97,216)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<path
							id="playme-path5"
							d="M647.5,163.3C647.6,160.2,643.1,157.6,639.3,157.4C635.5,157.2,630.1,160.2,630.2,163.4C630.3,166.6,634.9,169.1,638.8,169.1C642.7,169.1,647.5,166.5,647.5,163.3Z"
							fill="rgba(0,0,0,0)"
							stroke="rgb(255,97,216)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</g>
				</g>
			</g>
		</g>
		<g id="playme-notes-left" transform="matrix(0.669902 -0.255492 0.255492 0.669903 -202.729504 131.160881)">
			<g className="landing-notes-animation__note2-group" transform="translate(376.349907,107.570774)">
				<g className="landing-notes-animation__note2-rotate" transform="rotate(0)">
					<g className="landing-notes-animation__note2" transform="scale(0.641022,0.641019) translate(-362.849319,-61.149998)" opacity="0">
						<polyline
							id="playme-polyline2"
							points="388.2,73.6 388.2,34.6 354.9,42.6 354.9,82.4"
							fill="rgba(0,0,0,0)"
							stroke="rgb(255,97,216)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></polyline>
						<path
							id="playme-path10"
							d="M388.2,74.1C388.2,71.1,383.8,68.5,380.1,68.3C376.4,68.1,370.9,71.1,371,74.3C371.1,77.5,375.6,79.9,379.6,79.9C383.6,79.9,388.2,77.3,388.2,74.1Z"
							fill="rgba(0,0,0,0)"
							stroke="rgb(255,97,216)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<path
							id="playme-path11"
							d="M354.9,81.9C354.9,78.8,350.5,76.2,346.7,76C342.9,75.8,337.4,78.8,337.5,82C337.6,85.2,342.2,87.7,346.2,87.7C350.2,87.7,354.9,85.1,354.9,81.9Z"
							fill="rgba(0,0,0,0)"
							stroke="rgb(255,97,216)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<line
							id="playme-line3"
							x1="354.9"
							y1="48.4"
							x2="388.2"
							y2="40.3"
							fill="rgba(0,0,0,0)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></line>
						<line
							id="playme-line4"
							x1="354.9"
							y1="54.6"
							x2="388.2"
							y2="47"
							fill="rgba(0,0,0,0)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></line>
					</g>
				</g>
			</g>
			<g className="landing-notes-animation__note1-group" transform="translate(417.525928,16.382583)">
				<g className="landing-notes-animation__note1-rotate" transform="rotate(0)">
					<g className="landing-notes-animation__note1" transform="scale(0.794404,0.794404) translate(-369.714297,-60.304541)" opacity="0">
						<path
							id="playme-path12"
							d="M371.8,79.5C371.8,76.4,367.3,73.7,363.5,73.6C359.7,73.5,354.2,76.4,354.3,79.6C354.4,82.8,359,85.3,363,85.3C367,85.3,371.8,82.7,371.8,79.5Z"
							fill="rgba(0,0,0,0)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<line
							id="playme-line5"
							x1="371.8"
							y1="79.5"
							x2="371.8"
							y2="33.3"
							fill="rgba(0,0,0,0)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></line>
						<path
							id="playme-path13"
							d="M371.8,33.4C372.569455,36.177881,373.785307,38.812229,375.4,41.2C379.1,46.9,383,48.2,384.2,52.8C384.7,54.5,384.9,57.2,383.3,61.1"
							fill="rgba(0,0,0,0)"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</g>
				</g>
			</g>
		</g>
	</svg>
);

const Home: NextPage = () => {
	const { t } = useTranslation();

	return (
		<>
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
								Turn of commands for certain users or roles with one click of a button on the dashboard. Now they can’t mess with the
								bot anymore!
							</p>
						</div>
					</div>
					<div className="landing-big-section">
						<div className="landing-big-section-text">
							<h1 className="landing-big-title">Around the world, around the world...</h1>
							<p className="landing-big-text">
								Stereo is used by hundreds of users across the globe and not everyone speaks English, that’s why Stereo is translated
								in multiple different languages so everyone can experience the fun and high quality audio their way.
							</p>
						</div>
						<img id="three" className="landing-big-image" src="/content/landing/languages.svg" alt="karaoke image" />
					</div>
				</div>
			</Page>

			<Page className="small-section">
				<div className="landing-small-section-container">
					<div className="landing-small-title">
						<h3 className="landing-small-title-text">Still not convinced?</h3>
						<p className="landing-small-desc">Don’t worry, we aren’t done yet!</p>
					</div>
					<div className="landing-small-topics">
						<div className="landing-small-topics-left">
							<div className="landing-small-topic">
								<div className="landing-small-topic-icon">
									<i className="fa-solid fa-sack-dollar" />
								</div>
								<div className="landing-small-topic-text">
									<h1>Money, which money?</h1>
									<p>Stereo is and will always be 100% free with no hidden costs.</p>
								</div>
							</div>
							<div className="landing-small-topic">
								<div className="landing-small-topic-icon">
									<i className="fa-solid fa-server" />
								</div>
								<div className="landing-small-topic-text">
									<h1>Downtime? That doesn’t exist.</h1>
									<p>You won’t miss a single note with 99.99% guaranteed uptime.</p>
								</div>
							</div>
							<div className="landing-small-topic">
								<div className="landing-small-topic-icon">
									<i className="fa-solid fa-sliders" />
								</div>
								<div className="landing-small-topic-text">
									<h1>Commands? So outdated.</h1>
									<p>Yes, we have a webplayer too! Now you can do whatever you want from the web, no more switching to Discord.</p>
								</div>
							</div>
						</div>
						<div className="landing-small-topics-right">
							<div className="landing-small-topic">
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
										Don’t worry, we got you covered! We support SoundCloud playback too! Spotify and Deezer are supported as
										search aswell!
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
							</div>
						</div>
					</div>
				</div>
			</Page>

			<Page className="invite-section">
				<div className="landing-small-section-container">
					<div className="landing-small-title">
						<h3 className="landing-small-title-text">Join the club</h3>
						<p className="landing-small-desc">Invite Stereo today to listen to high quality audio for free!</p>
					</div>
					<Button title={capitalise(t("common:invite"))} style="main" type="link" path="/invite" external />
				</div>
			</Page>
		</>
	);
};

export default Home;
