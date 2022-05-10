import type { ReactFC } from "../../../utils/types";
import Select, { SingleValueProps, components, StylesConfig } from "react-select";
import { ReactNode, useState } from "react";
import type { Option as OptionProp, SingleProps } from "./SelectTypes";
import { getCustomComponents } from "./SelectComponents";

const SingleValue: ReactFC<SingleValueProps<OptionProp, false>> = (props) => {
	let extra: ReactNode;
	if (props.data.icon) {
		switch (props.data.icon.type) {
			case "image":
				extra = <img className="react-select-icon" src={props.data.icon.image} alt="" />;
				break;
			case "colour":
				{
					const { colour } = props.data.icon;
					extra = <p className="react-select-colour" style={{ backgroundColor: colour }} />;
				}
				break;
			case "icon":
				extra = <i id="react-select-icon-icon" className={props.data.icon.icon} />;
				break;
			default:
				break;
		}
	}

	return (
		<components.SingleValue className="react-select-singlevalue" {...props}>
			{extra}
			<p className="react-select-option-value">{props.children}</p>
		</components.SingleValue>
	);
};

export const SingleSelect: ReactFC<SingleProps> = (props) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const styles: StylesConfig<OptionProp, false> = {
		dropdownIndicator: (base) => ({ ...base, transform: `rotate(${menuOpen ? "180deg" : "0deg"})` }),
		indicatorSeparator: (base) => ({ ...base, display: "none" })
	};

	const components = getCustomComponents<false>();
	return (
		<Select
			{...props}
			className="react-select-container"
			classNamePrefix="a"
			onMenuClose={() => setMenuOpen(false)}
			onMenuOpen={() => setMenuOpen(true)}
			// menuIsOpen
			styles={styles}
			components={{ ...components, SingleValue }}
		/>
	);
};
