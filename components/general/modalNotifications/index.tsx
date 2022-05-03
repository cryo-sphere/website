import type { ReactFC } from "../../../utils/types";

interface Props {
	title: string;
	icon: "success";
}

const ModalNotifications: ReactFC<Props> = ({ title, icon }) => {
	const getIcon = () => {
		switch (icon) {
			case "success":
				return <i className="fa-solid fa-check" />;
		}
	};

	return (
		<div className="modal-notification">
			<span className="modal-notification-icon">{getIcon()}</span>
			<span className="modal-notification-text">{title}</span>
		</div>
	);
};

export default ModalNotifications;
