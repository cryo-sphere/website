import type { ReactFC } from "../../../utils/types";
import ReactSelect, { Props, ThemeConfig } from "react-select";

interface Option {
	value: any;
	label: string;
}

const Select: ReactFC<Props<Option>> = (props) => {
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

	return <ReactSelect {...props} theme={setTheme} />;
};

export default Select;
