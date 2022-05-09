import type { ReactFC } from "../../../utils/types";
import Select, {
	Props as SelectProps,
	GroupBase,
	OptionProps,
	MenuListProps,
	MenuProps,
	ControlProps,
	SingleValueProps,
	InputProps,
	DropdownIndicatorProps,
	components,
	StylesConfig
} from "react-select";
import { ReactNode, useState } from "react";

export interface Option {
	label: string;
	value: any;
	icon?: OptionIcon;
}

export interface OptionIconColour {
	type: "colour";
	colour: string;
}
export interface OptionIconIcon {
	type: "icon";
	icon: string;
}
export interface OptionIconImage {
	type: "image";
	image: string;
}

export type OptionIcon = { type: "colour" | "icon" | "image" } & (OptionIconColour | OptionIconIcon | OptionIconImage);
export type Props = SelectProps<Option, false, GroupBase<Option>>;

const getEventNames = (isSelected: boolean, isFocused: boolean) => {
	const names: string[] = [];

	if (isSelected) names.push("selected");
	if (isFocused) names.push("focused");

	return names.join(" ");
};

const Control: ReactFC<ControlProps<Option, false>> = (props) => {
	const className = `react-select-control ${getEventNames(false, props.isFocused)}`;

	return (
		<components.Control className={className} {...props}>
			{props.children}
		</components.Control>
	);
};

const DropdownIndicator: ReactFC<DropdownIndicatorProps<Option, false>> = (props) => {
	const className = `react-select-indicator`;

	return (
		<components.DropdownIndicator className={className} {...props}>
			{props.children}
		</components.DropdownIndicator>
	);
};

const SingleValue: ReactFC<SingleValueProps<Option, false>> = (props) => {
	let extra: ReactNode;
	if (props.data.icon) {
		switch (props.data.icon.type) {
			case "image":
				extra = <img className="react-select-icon" src={props.data.icon.image} alt="" />;
				break;

			default:
				break;
		}
	}

	return (
		<components.SingleValue className="react-select-singlevalue" {...props}>
			{extra} <p className="react-select-option-value">{props.children}</p>
		</components.SingleValue>
	);
};

const Input: ReactFC<InputProps<Option, false>> = (props) => {
	return (
		<components.Input className="react-select-input" {...props}>
			{props.children}
		</components.Input>
	);
};

const Menu: ReactFC<MenuProps<Option, false>> = (props) => {
	return (
		<components.Menu className="react-select-menu" {...props}>
			{props.children}
		</components.Menu>
	);
};

const MenuList: ReactFC<MenuListProps<Option, false>> = (props) => {
	return (
		<components.MenuList className="react-select-menulist" {...props}>
			{props.children}
		</components.MenuList>
	);
};

const Option: ReactFC<OptionProps<Option, false>> = (props) => {
	let extra: ReactNode;
	if (props.data.icon) {
		switch (props.data.icon.type) {
			case "image":
				extra = <img className="react-select-icon" src={props.data.icon.image} alt="" />;
				break;

			default:
				break;
		}
	}

	const className = `react-select-option ${getEventNames(props.isSelected, props.isFocused)}`;

	return (
		<>
			<components.Option className={className} {...props}>
				{extra}
				<p className="react-select-option-value">{props.children}</p>
			</components.Option>
		</>
	);
};

export const SingleSelect: ReactFC<Props> = (props) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const styles: StylesConfig<Option, false> = {
		dropdownIndicator: (base) => ({ ...base, transform: `rotate(${menuOpen ? "180deg" : "0deg"})` })
	};
	return (
		<Select
			{...props}
			className="react-select-container"
			onMenuClose={() => setMenuOpen(false)}
			onMenuOpen={() => setMenuOpen(true)}
			styles={styles}
			components={{ Option, MenuList, Menu, Control, SingleValue, Input, DropdownIndicator }}
		/>
	);
};
