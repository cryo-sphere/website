import type { GroupBase, Props as SelectProps } from "react-select";

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
export type SingleProps = SelectProps<Option, false, GroupBase<Option>>;
export type MultiProps = SelectProps<Option, true, GroupBase<Option>>;
