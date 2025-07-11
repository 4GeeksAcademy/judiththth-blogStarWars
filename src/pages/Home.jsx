import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { useEffect, useState } from "react";
import { getCharacters, getPlanets, getVehicles } from "../services/starwarsServices.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getCharacters()
		.then((data)=>dispatch({type:"update_characters", payload: data}))
		
		getPlanets()
		.then((data)=>dispatch({type:"update_planets", payload: data}))

		getVehicles()
		.then((data)=>dispatch({type:"update_vehicles", payload: data}))
	}, []);


	return (
			
		<div className="text-center mt-5" >
			<div className="row">
			{store.characters.map((item)=>
			<div className="col" key={item.uid}>
			<CharacterCard name={item.properties.name} id={item.uid} gender={item.properties.gender} hair={item.properties.hair_color} eyes={item.properties.eye_color} /></div>)}
			
			</div>

			{/* {store.planets.map((item)=><PlanetCard name={item.name} key={item.uid}/>)}
			{store.vehicles.map((item)=><VehicleCard name={item.name} key={item.uid}/>)} */}
		</div>
	);
}; 