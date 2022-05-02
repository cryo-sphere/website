import type { ReactFC } from "../../../utils/types";
import Modal from "../../general/modal";

interface Props {
	onClick: () => void;
	isOpen: boolean;

	title: string;
	options: Options[];
}

interface Options {
	name: string;
	selected: boolean;
}

const MultipleChoiceModal: ReactFC<Props> = ({ onClick, isOpen, title, options }) => {
	const props = { onClick, isOpen };

	return (
		<Modal {...props}>
			<div>
				<h1>{title}</h1>
				<button onClick={onClick}>
					<i className="fa-solid fa-xmark" />
				</button>
			</div>
			<ul>
				{options.map((option, key) => (
					<li key={key}>
						<span>{option.name}</span>
						{option.selected && <span>SELECTED</span>}
					</li>
				))}
			</ul>
		</Modal>
	);
};

export default MultipleChoiceModal;
