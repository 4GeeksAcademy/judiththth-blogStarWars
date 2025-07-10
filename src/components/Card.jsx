import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({ name, gender, hair, eyes }) => {

    const { store, dispatch } = useGlobalReducer(

    )

    function addFavs() {
        dispatch({type:"add_favs", payload:{name:name}})
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://www.swapi.tech/api/people/" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{gender}</p>
                <p className="card-text">{hair}</p>
                <p className="card-text">{eyes}</p>
                <a href="#" className="btn btn-primary">Leer más</a> <span><a className="btn btn-danger" onClick={addFavs}> <i className="fa-regular fa-heart"></i> </a></span>
            </div>
        </div>
    );
}; 