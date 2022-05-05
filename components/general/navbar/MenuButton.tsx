import { useState } from "react";
import type { ReactFC } from "../../../utils/types";

interface Props {
	onClick: () => void;
}

const MenuButton: ReactFC<Props> = ({ onClick }) => {
	const [enabled, setEnabled] = useState(false);

	const onClickEvent = () => {
		setEnabled(!enabled);
		onClick();
	};

	return (
		<button className={`navbar-menu-button ${enabled ? "enabled" : ""}`} onClick={onClickEvent}>
			<div className="navbar-menu-button-bar"></div>
			<div className="navbar-menu-button-bar"></div>
			<div className="navbar-menu-button-bar"> </div>
		</button>
	);
};

export default MenuButton;
