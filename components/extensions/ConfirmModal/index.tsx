import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import type { ReactFC } from "../../../utils/types";
import Modal from "../../general/modal";
import ModalNotifications from "../../general/modalNotifications";

interface Props {
	onClick: () => void;
	isOpen: boolean;

	title: string;
	notificationTitle?: string;

	onConfirmAfter: "notification" | "close";
	onConfirm: (result: boolean) => void;
}

const ConfirmModal: ReactFC<Props> = ({ onClick, title, isOpen, onConfirm, onConfirmAfter, notificationTitle }) => {
	const { t } = useTranslation();

	const [notificationEnabled, setNotificationEnabled] = useState(false);
	const [nTimeout, setNTimeout] = useState<NodeJS.Timeout | undefined>();

	const onClickEvent = () => {
		setNotificationEnabled(false);
		onClick();
	};

	const props = { onClick: onClickEvent, isOpen };

	const onConfirmEvent = (boolean: boolean) => {
		switch (onConfirmAfter) {
			case "notification":
				{
					if (boolean) {
						setNotificationEnabled(true);

						const timeout = setTimeout(() => setNotificationEnabled(false), 5e3);
						setNTimeout(timeout);
					}

					onConfirm(boolean);
					onClick();
				}
				break;
			case "close":
				onConfirm(boolean);
				onClickEvent();
				break;
		}
	};

	useEffect(() => {
		return () => {
			if (nTimeout) clearTimeout(nTimeout);
		};
	}, []);

	return (
		<>
			<ModalNotifications icon="success" title={notificationTitle ?? "No title added"} enabled={notificationEnabled} />
			<Modal {...props}>
				<div className="modal-top">
					<h1 className="modal-title">{title}</h1>
					<button className="modal-close-button" onClick={onClickEvent}>
						<i className="fa-solid fa-xmark" />
					</button>
				</div>
				<div className="cm-buttons">
					<button className="cm-button-cancel" onClick={() => onConfirmEvent(false)}>
						{t("cancel")}
					</button>
					<button className="cm-button-continue" onClick={() => onConfirmEvent(true)}>
						{t("continue")}
					</button>
				</div>
			</Modal>
		</>
	);
};

export default ConfirmModal;
