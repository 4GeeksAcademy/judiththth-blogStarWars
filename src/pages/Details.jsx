import "../index.css";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailInfo } from "../services/starwarsServices.js";

export const Details = () => {
    const { store, dispatch } = useGlobalReducer();
    const { type, id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        getDetailInfo(type, id)
            .then((data) => {
                console.log("Detalle recibido:", data);
                if (data && data.result && data.result.properties) {
                    setDetail(data.result.properties);
                }
            })
            .catch((err) => console.error("Error al cargar detalles:", err));
    }, [type, id]);

    if (!detail) {
        return (
            <div className="text-center mt-5">
                <h2>Cargando...</h2>
            </div>
        );
    }


    return (
        <div className="bg-space d-flex justify-content-center align-items-start" style={{ minHeight: "700px", paddingTop: "48px" }}>
            <div className="card shadow-lg" style={{ maxWidth: "800px", width: "100%" }}>
                <div className="card-body text-center">
                    <h1 className="card-title mb-4">{detail.name}</h1>

                    {type === "character" && (
                        <ul className="list-group list-group-flush text-start">
                            <li className="list-group-item"><strong>Género:</strong> {detail.gender}</li>
                            <li className="list-group-item"><strong>Color de pelo:</strong> {detail.hair_color}</li>
                            <li className="list-group-item"><strong>Color de ojos:</strong> {detail.eye_color}</li>
                            <li className="list-group-item"><strong>Altura:</strong> {detail.height} cm</li>
                            <li className="list-group-item"><strong>Peso:</strong> {detail.mass} kg</li>
                        </ul>
                    )}

                    {type === "planet" && (
                        <ul className="list-group list-group-flush text-start">
                            <li className="list-group-item"><strong>Población:</strong> {detail.population}</li>
                            <li className="list-group-item"><strong>Diámetro:</strong> {detail.diameter} km</li>
                            <li className="list-group-item"><strong>Clima:</strong> {detail.climate}</li>
                            <li className="list-group-item"><strong>Terreno:</strong> {detail.terrain}</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );

};
