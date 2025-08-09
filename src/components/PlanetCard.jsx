import useGlobalReducer from "../hooks/useGlobalReducer";
import { NavLink } from "react-router-dom";

export const PlanetCard = ({ name, id, population, diameter}) => {

    const { store, dispatch } = useGlobalReducer(

    )

    function addFavs() {
        dispatch({ type: "add_favs", payload: { name: name } })
    }

    return (
        <div className="card" style={{ width: "18rem", margin: "0", padding:"0"}}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-start">Población: {population}</p>
                <p className="card-text text-start">Superficie: {diameter}</p>
                
                <div className="d-flex justify-content-between">
                    <NavLink to={`/details/planet/${id}`} className="btn btn-primary">Leer más</NavLink>
                    <button className="btn btn-danger" onClick={addFavs}><i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}; 