import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { ReactFC } from "../../../utils/types";
import Button from "../button";
import MenuButton from "./MenuButton";
import Navlink from "./navlink";

const Navbar: ReactFC = () => {
	const [enabled, setEnabled] = useState(false);
	const mobileNavbarController = useAnimation();

	useEffect(() => {
		if (enabled) {
			void mobileNavbarController.start({
				height: "calc(100vh - 80px)",
				transition: {
					duration: 1,
					ease: [0.6, 0, 0.17, 1]
				}
			});
		} else {
			void mobileNavbarController.start({
				height: "0vh",
				transition: {
					duration: 1,
					ease: [0.6, 0, 0.17, 1]
				}
			});
		}

		return () => mobileNavbarController.stop();
	}, [enabled]);

	const onClick = () => setEnabled(!enabled);
	const closeDropdown = () => setEnabled(false);

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
						<Button title="Login" style="main" type="link" path="/api/login" />
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
					<li className="navbar-buttons-bot-mobile">
						<Button onClick={closeDropdown} title="Invite" style="secondary-nav" type="link" path="/invite" external />
						<Button onClick={closeDropdown} title="Login" style="main" type="link" path="/api/login" />
					</li>
				</motion.ul>
			</div>
		</>
	);
};

export default Navbar;
