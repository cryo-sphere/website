import { useEffect, useState } from "react";
import type { ReactFC } from "../../../utils/types";
import Modal from "../../general/modal";
import ModalNotifications from "../../general/modalNotifications";

interface Props {
	onClick: () => void;
	isOpen: boolean;

	title: string;
	notificationTitle?: string;

	options: Options[];

	onSelected: (name: string) => void;
	onSelectedAfter: "open" | "close" | "notification";
}

interface Options {
	name: string;
	selected: boolean;
}

const MultipleChoiceModal: ReactFC<Props> = ({ onClick, onSelected, onSelectedAfter, isOpen, title, notificationTitle, options }) => {
	const [notificationEnabled, setNotificationEnabled] = useState(false);
	const [nTimeout, setNTimeout] = useState<NodeJS.Timeout | undefined>();

	const onClickEvent = () => {
		setNotificationEnabled(false);
		onClick();
	};

	const props = { onClick: onClickEvent, isOpen };

	const onSelectedEvent = (name: string) => {
		switch (onSelectedAfter) {
			case "close":
				onSelected(name);
				onClick();
				break;
			case "open":
				onSelected(name);
				break;
			case "notification":
				{
					setNotificationEnabled(true);
					const timeout = setTimeout(() => setNotificationEnabled(false), 5e3);
					setNTimeout(timeout);

					onSelected(name);
					onClick();
				}
				break;
		}
	};

	useEffect(() => {
		return () => {
			if (nTimeout) clearTimeout(nTimeout);
		};
	});

	return (
		<>
			<ModalNotifications icon="success" title={notificationTitle ?? "No title added"} enabled={notificationEnabled} />
			<Modal {...props}>
				<div className="modal-top">
					<h1 className="modal-title">{title}</h1>
					<button className="modal-close-button" onClick={onClick}>
						<i className="fa-solid fa-xmark" />
					</button>
				</div>
				<ul className="mcm-list">
					{options.map((option, key) => (
						<button
							key={key}
							onClick={() => onSelectedEvent(option.name)}
							className={`mcm-item ${option.selected ? "mcm-item-selected" : "mcm-item-normal"}`}
							disabled={option.selected}
						>
							<span className="mcm-item-name">{option.name}</span>
							{option.selected && <span className="mcm-span-selected">SELECTED</span>}
						</button>
					))}
				</ul>
			</Modal>
		</>
	);
};

export default MultipleChoiceModal;
