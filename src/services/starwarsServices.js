import { useParams } from "react-router-dom";

	export async function getCharacters() {
		try {
			let response = await fetch("https://www.swapi.tech/api/people/?expanded=true", {method: "GET"})
            
			let data = await response.json()

			if (response.status === 200) {
				return data.results
            }
		}
				
		catch (error) {
			console.log(error);

		}
	};

	export async function getPlanets() {
		try {
			let response = await fetch("https://www.swapi.tech/api/planets/?expanded=true", {method: "GET"})
            
			let data = await response.json()

			if (response.status === 200) {
                return data.results
            }
		}
				
		catch (error) {
			console.log(error);

		}
	};

				
		export async function getDetailInfo(id) {
						
		try {
			let response = await fetch("https://www.swapi.tech/api/people/"+id, {method: "GET"})
            
			let data = await response.json()

			if (response.status === 200) {
                return data.result
            }
			console.log(data);
			
		}
				
		catch (error) {
			console.log(error);

		}
	};
	