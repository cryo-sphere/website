import type { ReactFC } from "../../../utils/types";
import Select, {
	OptionProps,
	MenuListProps,
	MenuProps,
	ControlProps,
	SingleValueProps,
	InputProps,
	DropdownIndicatorProps,
	components,
	StylesConfig,
	NoticeProps
} from "react-select";
import { ReactNode, useState } from "react";
import { useTranslation } from "next-i18next";
import type { Option as OptionProp, SingleProps } from "./SelectTypes";

const getEventNames = (isSelected: boolean, isFocused: boolean) => {
	const names: string[] = [];

	if (isSelected) names.push("selected");
	if (isFocused) names.push("focused");

	return names.join(" ");
};

const Control: ReactFC<ControlProps<OptionProp, false>> = (props) => {
	const className = `react-select-control ${getEventNames(false, props.isFocused)}`;

	return (
		<components.Control className={className} {...props}>
			{props.children}
		</components.Control>
	);
};

const DropdownIndicator: ReactFC<DropdownIndicatorProps<OptionProp, false>> = (props) => {
	const className = `react-select-indicator`;

	return (
		<components.DropdownIndicator className={className} {...props}>
			{props.children}
		</components.DropdownIndicator>
	);
};

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

const Input: ReactFC<InputProps<OptionProp, false>> = (props) => {
	return (
		<components.Input className="react-select-input" {...props}>
			{props.children}
		</components.Input>
	);
};

const Menu: ReactFC<MenuProps<OptionProp, false>> = (props) => {
	return (
		<components.Menu className="react-select-menu" {...props}>
			{props.children}
		</components.Menu>
	);
};

const MenuList: ReactFC<MenuListProps<OptionProp, false>> = (props) => {
	return (
		<components.MenuList className="react-select-menulist" {...props}>
			{props.children}
		</components.MenuList>
	);
};

const Option: ReactFC<OptionProps<OptionProp, false>> = (props) => {
	let extra: ReactNode;
	let color = "#fff";
	if (props.data.icon) {
		switch (props.data.icon.type) {
			case "image":
				extra = <img className="react-select-icon" src={props.data.icon.image} alt="" />;
				break;
			case "colour":
				color = props.data.icon.colour;
				extra = <p className="react-select-colour" style={{ backgroundColor: color }} />;
				break;
			case "icon":
				extra = <i id="react-select-icon-icon" className={props.data.icon.icon} />;
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
				<p className="react-select-option-value" style={{ color }}>
					{props.children}
				</p>
			</components.Option>
		</>
	);
};

const NoOptionsMessage: ReactFC<NoticeProps<OptionProp, false>> = (props) => {
	const { t } = useTranslation();

	return (
		<components.NoOptionsMessage className="react-select-notice" {...props}>
			{t("common:dropdown.no_options")}
		</components.NoOptionsMessage>
	);
};

export const SingleSelect: ReactFC<SingleProps> = (props) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const styles: StylesConfig<OptionProp, false> = {
		dropdownIndicator: (base) => ({ ...base, transform: `rotate(${menuOpen ? "180deg" : "0deg"})` }),
		indicatorSeparator: (base) => ({ ...base, display: "none" })
	};
	return (
		<Select
			{...props}
			className="react-select-container"
			onMenuClose={() => setMenuOpen(false)}
			onMenuOpen={() => setMenuOpen(true)}
			styles={styles}
			components={{ Option, MenuList, Menu, Control, SingleValue, Input, DropdownIndicator, NoOptionsMessage }}
		/>
	);
};
