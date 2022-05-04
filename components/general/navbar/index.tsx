import { motion } from "framer-motion";
import React from "react";
import type { ReactFC } from "../../../utils/types";
import Navlink from "./navlink";

const Navbar: ReactFC = () => {
	return (
		<motion.div className="navbar-container">
			<div className="navbar-nav">
				<div className="navbar-logo">
					<img className="navbar-logo-icon" src="/logo.png" alt="logo" />
					<h2 className="navbar-logo-title">Stereo</h2>
				</div>
				<div className="navbar-buttons">
					<Navlink title="Commands" path="/commands" />
					<Navlink title="FAQ" path="/faq" />
					<Navlink title="Status" path="/status" external />
				</div>
			</div>
			<div className="navbar-buttons-bot">
				<span>Invite</span>
				<span>Login</span>
			</div>
		</motion.div>
	);
};

export default Navbar;
