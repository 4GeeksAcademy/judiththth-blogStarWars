import useGlobalReducer from "../hooks/useGlobalReducer";
import { NavLink } from "react-router-dom";

export const CharacterCard = ({ name, id, gender, hair, eyes }) => {

    const { store, dispatch } = useGlobalReducer(

    )

    function addFavs() {
        dispatch({ type: "add_favs", payload: { name: name } })
    }

    return (
        <div className="card" style={{ width: "18rem", margin: "0", padding:"0"}}>
            <div className="card-body overflow-auto">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-start">Género: {gender}</p>
                <p className="card-text text-start">Color de pelo: {hair}</p>
                <p className="card-text text-start">Color de ojos: {eyes}</p>
                <div className="d-flex justify-content-between">
                    <NavLink to={"/details/"+id} className="btn btn-primary">Leer más</NavLink>
                    <button className="btn btn-danger" onClick={addFavs}><i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}; 