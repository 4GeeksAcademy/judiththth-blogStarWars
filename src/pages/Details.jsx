import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailInfo } from "../services/starwarsServices.js";

export const Details = () => {
    const { store, dispatch } = useGlobalReducer();
    const { type, id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        getDetailInfo(type, id) // le pasamos el tipo y el id
            .then((data) => setDetail(data.result.properties));
    }, [type, id]);

    if (!detail) return <p>Cargando...</p>;

    return (
        <div className="text-center mt-5">
            <h1>{detail.name}</h1>
            {type === "character" && (
                <>
                    <p>Género: {detail.gender}</p>
                    <p>Color de pelo: {detail.hair_color}</p>
                    <p>Color de ojos: {detail.eye_color}</p>
                </>
            )}
            {type === "planet" && (
                <>
                    <p>Población: {detail.population}</p>
                    <p>Diámetro: {detail.diameter}</p>
                </>
            )}
        </div>
    );
};
