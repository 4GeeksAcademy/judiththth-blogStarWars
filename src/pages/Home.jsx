import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";
import { useEffect, useState } from "react";
import { getCharacters } from "../services/starwarsServices.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	// async function getPlanets() {
	// 	try {
	// 		let response = await fetch("https://www.swapi.tech/api/planets", { method: "GET" }
	// 		)
	// 		let data = await response.json()
	// 		setCharacters()
	// 	}

	// 	catch (error) {
	// 		console.log(error);

	// 	}
	// }

	// async function getVehicles() {
	// 	try {
	// 		let response = await fetch("https://www.swapi.tech/api/planets", { method: "GET" }
	// 		)
	// 		let data = await response.json()
	// 		setCharacters(data.result)
	// 	}

	// 	catch (error) {
	// 		console.log(error);

	// 	}
	// }

	useEffect(() => {
		getCharacters()
		.then((data)=>dispatch({type:"update_characters", payload: data}))
		
		// getPlanets()
		// getVehicles()
	}, []);


	return (
		<div className="text-center mt-5">
			<h1>Personajes</h1>
			{store.characters.map((item)=><Card name={item.name} gender={item.gender} hair={item.hair_color} eyes={item.eye_color} key={item.uid}/>)}

		</div>
	);
}; 