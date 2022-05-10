import type { ReactFC } from "../../../utils/types";
import Select, { MultiValueProps, components, MultiValueGenericProps } from "react-select";
import { ReactNode, useState } from "react";
import type { Option as OptionProp, MultiProps } from "./SelectTypes";
import { getCustomComponents, getStyles } from "./SelectComponents";

const MultiValue: ReactFC<MultiValueProps<OptionProp, true>> = (props) => {
	let extra: ReactNode;
	let color = "#aaa";
	if (props.data.icon) {
		switch (props.data.icon.type) {
			case "image":
				extra = <img className="react-select-icon" src={props.data.icon.image} alt="" />;
				break;
			case "colour":
				{
					color = props.data.icon.colour;
					extra = <p className="react-select-colour" style={{ backgroundColor: color }} />;
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
		<components.MultiValue className="react-select-multivalue" {...props}>
			<div className="react-select-multivalue container" style={{}}>
				{extra}
				<p className="react-select-option-value">{props.children}</p>
			</div>
		</components.MultiValue>
	);
};

const MultiValueContainer: ReactFC<MultiValueGenericProps<OptionProp, true>> = (props) => {
	let backgroundColor = "#AAAAAA7F";
	let borderColor = "#AAAAAA";

	if (props.data.icon?.type === "colour") {
		backgroundColor = `${props.data.icon.colour}7F`;
		borderColor = props.data.icon.colour;
	}

	return (
		<components.MultiValueContainer {...props}>
			<div style={{ backgroundColor, border: `1px solid ${borderColor}` }} className="react-select-multivalue container">
				{props.children}
			</div>
		</components.MultiValueContainer>
	);
};

export const MultiSelect: ReactFC<MultiProps> = (props) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const components = getCustomComponents<true>();
	const styles = getStyles<true>(menuOpen);

	return (
		<Select
			{...props}
			closeMenuOnSelect={false}
			isMulti
			className="react-select-container"
			classNamePrefix="react-select"
			onMenuClose={() => setMenuOpen(false)}
			onMenuOpen={() => setMenuOpen(true)}
			styles={styles}
			components={{
				...components,
				MultiValue,
				MultiValueContainer
			}}
		/>
	);
};
