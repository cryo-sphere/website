import type { ReactFC } from "../../../utils/types";
import Modal from "../../general/modal";

interface Props {
	onClick: () => void;
	isOpen: boolean;

	title: string;
	onConfirmAfter: "notification" | "close";
	onConfirm: (result: boolean) => void;
}

const ConfirmModal: ReactFC<Props> = ({ onClick, title, isOpen, onConfirm, onConfirmAfter }) => {
	const props = { onClick, isOpen };
	const onConfirmEvent = (boolean: boolean) => {
		switch (onConfirmAfter) {
			case "notification":
				// TODO: add notification stuff
				onConfirm(boolean);
				onClick();
				break;
			case "close":
				onConfirm(boolean);
				onClick();
				break;
		}
	};

	return (
		<Modal {...props}>
			<div className="modal-top">
				<h1 className="modal-title">{title}</h1>
				<button className="modal-close-button" onClick={onClick}>
					<i className="fa-solid fa-xmark" />
				</button>
			</div>
			<div className="cm-buttons">
				<button className="cm-button-cancel" onClick={() => onConfirmEvent(false)}>
					Cancel
				</button>
				<button className="cm-button-continue" onClick={() => onConfirmEvent(true)}>
					Continue
				</button>
			</div>
		</Modal>
	);
};

export default ConfirmModal;
