import type { NextPage } from "next";
import { useState } from "react";
import MultipleChoiceModal from "../components/extensions/MultipleChoiceModal";

const Home: NextPage = () => {
	const [modal, setModal] = useState(false);
	return (
		<main>
			<h1>Template</h1>
			<button onClick={() => setModal(true)}>open modal</button>
			<MultipleChoiceModal
				onClick={() => setModal(false)}
				isOpen={modal}
				title="Choose a bassboost level"
				options={[
					{ name: "None", selected: false },
					{ name: "Low", selected: true },
					{ name: "Medium", selected: false },
					{ name: "Hard", selected: false },
					{ name: "Extreme", selected: false }
				]}
			/>
		</main>
	);
};

export default Home;
