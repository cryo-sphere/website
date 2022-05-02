import type { NextPage } from "next";
import { useState } from "react";
import Modal from "../components/general/modal";

const Home: NextPage = () => {
	const [modal, setModal] = useState(false);
	return (
		<main>
			<h1>Template</h1>
			<button onClick={() => setModal(true)}>open modal</button>
			<Modal onClick={() => setModal(false)} isOpen={modal}>
				<h1>Hello!</h1>
			</Modal>
		</main>
	);
};

export default Home;
