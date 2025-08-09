import { useParams } from "react-router-dom";

export async function getCharacters() {
	try {
		let response = await fetch("https://www.swapi.tech/api/people/?expanded=true", { method: "GET" })

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
		let response = await fetch("https://www.swapi.tech/api/planets/?expanded=true", { method: "GET" })

		let data = await response.json()

		if (response.status === 200) {
			return data.results
		}
	}

	catch (error) {
		console.log(error);

	}
};

export function getDetailInfo(type, id) {
    const endpoint = type === "character" ? "people" : "planets";
    return fetch(`https://www.swapi.tech/api/${endpoint}/${id}`)
        .then(res => res.json());
}
