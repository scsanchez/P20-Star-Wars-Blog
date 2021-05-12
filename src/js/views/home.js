import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import MediaCard from "../component/card.js";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let peopleList = store.people;
	const [cardsMap, setCardsMap] = useState([]);

	useEffect(
		() => {
			console.log(typeof peopleList.results, "2");
		},
		[peopleList]
	);

	/*setCardsMap(
		store.people[0].results.map((elem, index) => {
			return <Card key={elem.uid} />;
		})
	);*/
	// key={elem.uid} title={elem.name} button={elem.url}

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p />
			<a href="#" className="btn btn-danger">
				If you see this red button, bootstrap is working
			</a>
			<MediaCard title="Lizard" />
		</div>
	);
};
