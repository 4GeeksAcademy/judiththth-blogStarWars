import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";
import { useEffect, useState } from "react";
import { getCharacters, getPlanets, } from "../services/starwarsServices.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getCharacters()
			.then((data) => dispatch({ type: "update_characters", payload: data }))

		getPlanets()
			.then((data) => dispatch({ type: "update_planets", payload: data }))
	}, []);



	return (

		<div className="text-center mt-5">
			<div className="row" >
				<h1> Personajes </h1>
				<div style={{ display: "flex", overflowX: "auto", gap: "1rem", padding: "1rem" }}>
					{store.characters.map((item) =>
						<div className="col" key={item.uid}>
							<CharacterCard name={item.properties.name} id={item.uid} gender={item.properties.gender} hair={item.properties.hair_color} eyes={item.properties.eye_color} /></div>)}
				</div>
			</div>

			<div className="row" >
				<h1> Planetas </h1>
				<div style={{ display: "flex", overflowX: "auto", gap: "1rem", padding: "1rem" }}>
					{store.planets.map((item) =>
						<div className="col" key={item.uid}>
							<PlanetCard name={item.properties.name} id={item.uid} population={item.properties.population} diameter={item.properties.diameter}  /></div>)}
				</div>
			</div>

						
		</div>
	);
}; 