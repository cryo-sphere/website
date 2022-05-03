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
			<div className="modal-top">
				<h1 className="modal-title">{title}</h1>
				<button className="modal-close-button" onClick={onClick}>
					<i className="fa-solid fa-xmark" />
				</button>
			</div>
			<ul className="mcm-list">
				{options.map((option, key) => (
					<button key={key} className={`mcm-item ${option.selected ? "mcm-item-selected" : "mcm-item-normal"}`} disabled={option.selected}>
						<span className="mcm-item-name">{option.name}</span>
						{option.selected && <span className="mcm-span-selected">SELECTED</span>}
					</button>
				))}
			</ul>
		</Modal>
	);
};

export default MultipleChoiceModal;
