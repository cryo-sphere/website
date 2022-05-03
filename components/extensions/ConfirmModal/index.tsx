import type { ReactFC } from "../../../utils/types";
import Modal from "../../general/modal";

interface Props {
	onClick: () => void;
	isOpen: boolean;

	title: string;
	onConfirm: (result: boolean) => void;
}

const ConfirmModal: ReactFC<Props> = ({ onClick, title, isOpen, onConfirm }) => {
	const props = { onClick, isOpen };

	return (
		<Modal {...props}>
			<div className="modal-top">
				<h1 className="modal-title">{title}</h1>
				<button className="modal-close-button" onClick={onClick}>
					<i className="fa-solid fa-xmark" />
				</button>
			</div>
			<div className="cm-buttons">
				<button className="cm-button-cancel">Cancel</button>
				<button className="cm-button-continue">Continue</button>
			</div>
		</Modal>
	);
};

export default ConfirmModal;
