import type { ReactFC } from "../../../utils/types";
import ReactSelect, { Props as SelectProps, ThemeConfig } from "react-select";

interface Option {
	value: string;
	label: string;
}

// type PropsSingle = SelectProps<Option, false> & { isMulti: false };
// type PropsMulti = SelectProps<Option, true> & { isMulti: true };
// type Props = PropsSingle | PropsMulti;

type Props = SelectProps<Option>;
const Select: ReactFC<Props> = (props) => {
	const setTheme: ThemeConfig = (theme) => {
		theme.colors = {
			...theme.colors,
			neutral0: "#36393F",
			neutral10: "#696D76",
			neutral20: "#696D76",
			primary25: "#494D56",
			primary: "#78A4FA",
			neutral80: "#fbfdfe"
		};

		return theme;
	};

	return <ReactSelect {...(props as SelectProps)} theme={setTheme} />;
};

export default Select;
