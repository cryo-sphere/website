import { motion } from "framer-motion";
import React from "react";
import type { ReactFC } from "../../../utils/types";

const Navbar: ReactFC = () => {
	return (
		<motion.div className="navbar-container">
			<div className="navbar-nav">
				<div className="navbar-logo">
					<img className="navbar-logo-icon" src="/logo.png" alt="logo" />
					<h2 className="navbar-logo-title">Stereo</h2>
				</div>
				<div className="navbar-buttons">
					<span>Commands</span>
					<span>FAQ</span>
					<span>Status</span>
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
