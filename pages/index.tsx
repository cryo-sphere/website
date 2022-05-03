import type { NextPage } from "next";
import { useState } from "react";
import MultipleChoiceModal from "../components/extensions/MultipleChoiceModal";

const Home: NextPage = () => {
	const [modal, setModal] = useState(false);
	const [items, setItems] = useState([
		{ key: 1, name: "None", selected: false },
		{ key: 2, name: "Low", selected: true },
		{ key: 3, name: "Medium", selected: false },
		{ key: 4, name: "Hard", selected: false },
		{ key: 5, name: "Extreme", selected: false }
	]);

	const onSelected = (name: string) => {
		const item = items.find((v) => v.name === name)!;
		item.selected = true;

		const newItems = items
			.filter((i) => i.name !== name)
			.map((i) => {
				i.selected = false;
				return i;
			});

		setItems([item, ...newItems].sort((a, b) => a.key - b.key));
	};

	return (
		<main>
			<h1>Template</h1>
			<button onClick={() => setModal(true)}>open modal</button>
			<MultipleChoiceModal
				onClick={() => setModal(false)}
				isOpen={modal}
				title="Choose a bassboost level"
				options={items}
				onSelected={onSelected}
				onSelectedAfter="close"
			/>
		</main>
	);
};

export default Home;
