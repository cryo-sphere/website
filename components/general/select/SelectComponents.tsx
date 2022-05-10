import { useTranslation } from "next-i18next";
import type { ReactNode } from "react";
import { ControlProps, components, DropdownIndicatorProps, InputProps, MenuProps, MenuListProps, OptionProps, NoticeProps } from "react-select";
import type { ReactFC } from "../../../utils/types";
import type { Option } from "./SelectTypes";

export const getEventNames = (isSelected: boolean, isFocused: boolean) => {
	const names: string[] = [];

	if (isSelected) names.push("selected");
	if (isFocused) names.push("focused");

	return names.join(" ");
};

export function getCustomComponents<Multi extends boolean>() {
	const Control: ReactFC<ControlProps<Option, Multi>> = (props) => {
		const className = `react-select-control ${getEventNames(false, props.isFocused)}`;
		return (
			<components.Control className={className} {...props}>
				{props.children}
			</components.Control>
		);
	};

	const DropdownIndicator: ReactFC<DropdownIndicatorProps<Option, Multi>> = (props) => {
		return (
			<components.DropdownIndicator className="react-select-indicator" {...props}>
				{props.children}
			</components.DropdownIndicator>
		);
	};

	const Input: ReactFC<InputProps<Option, Multi>> = (props) => {
		return (
			<components.Input className="react-select-input" {...props}>
				{props.children}
			</components.Input>
		);
	};

	const Menu: ReactFC<MenuProps<Option, Multi>> = (props) => {
		return (
			<components.Menu className="react-select-menu" {...props}>
				{props.children}
			</components.Menu>
		);
	};

	const MenuList: ReactFC<MenuListProps<Option, Multi>> = (props) => {
		return (
			<components.MenuList className="react-select-menulist" {...props}>
				{props.children}
			</components.MenuList>
		);
	};

	const Option: ReactFC<OptionProps<Option, Multi>> = (props) => {
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

	const NoOptionsMessage: ReactFC<NoticeProps<Option, Multi>> = (props) => {
		const { t } = useTranslation();

		return (
			<components.NoOptionsMessage className="react-select-notice" {...props}>
				{t("common:dropdown.no_options")}
			</components.NoOptionsMessage>
		);
	};

	return {
		Control,
		DropdownIndicator,
		Input,
		Menu,
		MenuList,
		Option,
		NoOptionsMessage
	};
}
