import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { ReactFC } from "../../../utils/types";
import Button from "../button";
import MenuButton from "./MenuButton";
import Navlink from "./navlink";

const Navbar: ReactFC = () => {
	const [enabled, setEnabled] = useState(false);
	const [userDropdown, setUserDropdown] = useState(false);

	const mobileNavbarController = useAnimation();
	const userDropdownController = useAnimation();

	const loggedIn = true; // !!!!TEMP BOOLEAN, CHANGE WHEN USER AUTH IS ADDED

	useEffect(() => {
		if (enabled)
			void mobileNavbarController.start({
				height: "calc(100vh - 80px)",
				transition: {
					duration: 1,
					ease: [0.6, 0, 0.17, 1]
				}
			});
		else
			void mobileNavbarController.start({
				height: "0vh",
				transition: {
					duration: 1,
					ease: [0.6, 0, 0.17, 1]
				}
			});

		if (userDropdown)
			void userDropdownController.start({
				opacity: 1,
				transform: "translateX(-15px) translateY(110px)",
				pointerEvents: "all",
				transition: { duration: 1, ease: [0.6, 0, 0.17, 1] }
			});
		else
			void userDropdownController.start({
				opacity: 0,
				transform: "translateX(-15px) translateY(50px)",
				pointerEvents: "none",
				transition: { duration: 1, ease: [0.6, 0, 0.17, 1] }
			});

		return () => {
			mobileNavbarController.stop();
			userDropdownController.stop();
		};
	}, [enabled, userDropdown]);

	const onClick = () => setEnabled(!enabled);
	const onClickUser = () => setUserDropdown(!userDropdown);

	const closeDropdown = () => setEnabled(false);
	const logoutButton = () => {
		// TODO: add cookie remover
		closeDropdown();
	};

	return (
		<>
			{/* Created to block items from moving under navbar */}
			<div className="fake-navbar" />
			<div className="navbar-container-wrapper">
				<motion.div className="navbar-container">
					<div className="navbar-nav">
						<Link href="/">
							<a onClick={closeDropdown} className="navbar-logo">
								<img className="navbar-logo-icon" src="/logo.png" alt="logo" />
								<h2 className="navbar-logo-title">Stereo</h2>
							</a>
						</Link>

						{/* Navbar for PC */}
						<div className="navbar-buttons">
							<Navlink title="Commands" path="/commands" />
							<Navlink title="FAQ" path="/faq" />
							<Navlink title="Status" path="/status" external />
						</div>
					</div>
					<div className="navbar-buttons-bot">
						<Navlink title="Invite" path="/invite" external />
						{loggedIn ? (
							<div tabIndex={0} onClick={onClickUser} className={`navbar-user ${userDropdown ? "enabled" : ""}`}>
								<img className="navbar-user-icon" src="https://static.daangamesdg.xyz/discord/pfp.gif" alt="discord pfp" />
								<span className="navbar-user-title">DaanGamesDG</span>
								<i id="navbar-button-icon" className="fa-solid fa-angle-down" />
								<motion.ul
									initial={{ opacity: 0, transform: "translateX(-15px) translateY(0px)", pointerEvents: "none" }}
									animate={userDropdownController}
									className="navbar-user-dropdown"
								>
									<li className="navbar-user-dropdown-link">
										<Navlink onClick={closeDropdown} title="Dashboard" path="/dashboard" />
									</li>
									<li className="navbar-user-dropdown-link">
										<Navlink onClick={closeDropdown} title="Playlists" path="/playlists" />
									</li>
									<li className="navbar-user-dropdown-link">
										<Navlink onClick={closeDropdown} title="Webplayer" path="/webplayer" />
									</li>
									<li className="navbar-user-dropdown-link line">
										<div className="line"></div>
									</li>
									<li className="navbar-user-dropdown-link">
										<Button onClick={logoutButton} title="Logout" style="danger" type="button" />
									</li>
								</motion.ul>
							</div>
						) : (
							<Button title="Login" style="main" type="link" path="/api/login" />
						)}
					</div>

					{/* Navbar for mobile */}
					<MenuButton onClick={onClick} />
				</motion.div>
				<motion.ul initial={{ height: 0 }} animate={mobileNavbarController} className={`navbar-mobile ${enabled ? "enabled" : ""}`}>
					<li className="navbar-buttons-mobile">
						<Navlink onClick={closeDropdown} title="Commands" path="/commands" />
						<Navlink onClick={closeDropdown} title="FAQ" path="/faq" />
						<Navlink onClick={closeDropdown} title="Status" path="/status" external />
					</li>
					{loggedIn ? (
						<>
							<div className="navbar-user">
								<img className="navbar-user-icon" src="https://static.daangamesdg.xyz/discord/pfp.gif" alt="discord pfp" />
								<span className="navbar-user-title">DaanGamesDG</span>
							</div>
							<li className="navbar-buttons-mobile user">
								<Navlink onClick={closeDropdown} title="Dashboard" path="/dashboard" />
								<Navlink onClick={closeDropdown} title="Playlists" path="/playlists" />
								<Navlink onClick={closeDropdown} title="Webplayer" path="/webplayer" />
							</li>
							<li className="navbar-buttons-bot-mobile">
								<Button onClick={closeDropdown} title="Invite" style="secondary-nav" type="link" path="/invite" external />
								<Button onClick={logoutButton} title="Logout" style="danger" type="button" />
							</li>
						</>
					) : (
						<li className="navbar-buttons-bot-mobile">
							<Button onClick={closeDropdown} title="Invite" style="secondary-nav" type="link" path="/invite" external />
							<Button onClick={closeDropdown} title="Login" style="main" type="link" path="/api/login" />
						</li>
					)}
				</motion.ul>
			</div>
		</>
	);
};

export default Navbar;
