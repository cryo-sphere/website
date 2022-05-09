import type { ReactFC } from "../../../utils/types";
import Select, { Props as SelectProps, GroupBase, OptionProps, MenuListProps, MenuProps, components } from "react-select";
import type { ReactNode } from "react";

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

	const className = `react-select-option ${props.isSelected ? "selected" : ""} ${props.isFocused ? "focused" : ""}`;

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
	return <Select {...props} className="react-select-container" components={{ Option, MenuList, Menu }} />;
};
